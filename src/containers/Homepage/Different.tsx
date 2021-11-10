import React, { useState, useEffect, useMemo } from 'react';

import { default as DifferentComponent } from 'components/Homepage/Different';
import { NFT } from 'containers/Homepage/slice';
import draw from 'utils/draw';

function getRandomIndex(length: number) {
  return Math.floor(Math.random() * length);
}

const Different = ({ nft, getPartByIndex, getImageByIndex }): JSX.Element => {
  const [backgroundIndex, setBackgroundIndex] = useState(0);
  const [glasseIndex, setGloasseIndex] = useState(0);
  const [capIndex, setCapIndex] = useState(0);
  const [clotheIndex, setClotheIndex] = useState(0);
  const [image, setImage] = useState('');

  useEffect(() => {
    (async function () {
      const drawParams = getImageByIndex({ backgroundIndex, capIndex, glasseIndex, clotheIndex });
      const result = await draw(drawParams);
      setImage(result);
    })();
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
    }, 4000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return <DifferentComponent image={image} cap={cap} glasse={glasse} clothe={clothe} />;
};

export default Different;
