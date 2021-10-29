import React, { useState, useEffect, useMemo } from 'react';

import Banner from 'components/Homepage/Banner';
import Different from 'components/Homepage/Different';
import Tarsiers from 'components/Homepage/Tarsiers';
import Roadmap from 'components/Homepage/Roadmap';
import Faq from 'components/Homepage/Faq';
import { useAppSelector } from 'hooks';
import { selectNft, NFT } from 'containers/Homepage/slice';
import draw from 'utils/draw';

function getRandomIndex(length: number) {
  return Math.floor(Math.random() * length);
}

const Homepage = (): JSX.Element => {
  const nft = useAppSelector(selectNft);

  const getPartByIndex = (type: NFT, index: number) => {
    return nft[type][index];
  };
  const getImageByIndex = ({ backgroundIndex, capIndex, glasseIndex, clotheIndex }) => {
    return {
      background: getPartByIndex(NFT.backgrounds, backgroundIndex),
      cap: getPartByIndex(NFT.caps, capIndex),
      glasse: getPartByIndex(NFT.glasses, glasseIndex),
      clothe: getPartByIndex(NFT.clothes, clotheIndex),
    };
  };

  // banner ----------start---------
  const [nft12, setNft12] = useState(getRandom12());

  function getRandom12() {
    const arr = [];
    for (let i = 0; i < 12; i++) {
      const i = getRandomIndex(nft[NFT.backgrounds].length);
      const j = getRandomIndex(nft[NFT.glasses].length);
      const k = getRandomIndex(nft[NFT.caps].length);
      const l = getRandomIndex(nft[NFT.clothes].length);
      const drawParams = getImageByIndex({ backgroundIndex: i, capIndex: k, glasseIndex: j, clotheIndex: l });
      arr.push(draw(drawParams));
    }
    return arr;
  }
  useEffect(() => {
    const timer = setInterval(() => {
      setNft12(getRandom12());
    }, 3000);

    return () => {
      clearInterval(timer);
    };
  }, []);
  // banner ----------end---------

  // diff -------start-------
  const [backgroundIndex, setBackgroundIndex] = useState(0);
  const [glasseIndex, setGloasseIndex] = useState(0);
  const [capIndex, setCapIndex] = useState(0);
  const [clotheIndex, setClotheIndex] = useState(0);

  const image = useMemo(() => {
    const drawParams = getImageByIndex({ backgroundIndex, capIndex, glasseIndex, clotheIndex });
    return draw(drawParams);
  }, [backgroundIndex, capIndex, glasseIndex, clotheIndex]);

  // 帽子
  const cap = useMemo(() => {
    return getPartByIndex(NFT.caps, capIndex);
  }, [capIndex]);
  // 眼睛
  const glasse = useMemo(() => {
    return getPartByIndex(NFT.glasses, glasseIndex);
  }, [glasseIndex]);
  // 身体
  const clothe = useMemo(() => {
    return getPartByIndex(NFT.clothes, clotheIndex);
  }, [clotheIndex]);

  useEffect(() => {
    const timer = setInterval(() => {
      const i = getRandomIndex(nft[NFT.backgrounds].length);
      const j = getRandomIndex(nft[NFT.glasses].length);
      const k = getRandomIndex(nft[NFT.caps].length);
      const l = getRandomIndex(nft[NFT.clothes].length);

      setBackgroundIndex(i);
      setGloasseIndex(j);
      setCapIndex(k);
      setClotheIndex(l);
    }, 3000);

    return () => {
      clearInterval(timer);
    };
  }, []);
  // diff -------end-------

  return (
    <>
      <Banner nft={nft12} />
      <Different image={image} cap={cap} glasse={glasse} clothe={clothe} />
      <Tarsiers nft={nft} />
      <Roadmap />
      <Faq />
    </>
  );
};

export default Homepage;
