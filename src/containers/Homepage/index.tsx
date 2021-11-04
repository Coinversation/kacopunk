import React, { useState, useEffect, useMemo } from 'react';

import Banner from 'components/Homepage/Banner';
import Different from 'components/Homepage/Different';
import Tarsiers from 'components/Homepage/Tarsiers';
import Roadmap from 'components/Homepage/Roadmap';
import Faq from 'components/Homepage/Faq';
import { useAppSelector } from 'hooks';
import { selectNft, NFT } from 'containers/Homepage/slice';
import draw from 'utils/draw';
import { head } from './assets';

const oldNftMap = new Set();

function getRandomIndex(length: number) {
  return Math.floor(Math.random() * length);
}

function getRandomNumber(length: number) {
  return Math.ceil(Math.random() * length);
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
      head: head,
      glasse: getPartByIndex(NFT.glasses, glasseIndex),
      clothe: getPartByIndex(NFT.clothes, clotheIndex),
    };
  };

  // banner ----------start---------
  const [nft12, setNft12] = useState([]);

  async function getRandom12() {
    const arr = [];
    const h = nft[NFT.backgrounds].length;
    const j = nft[NFT.glasses].length;
    const k = nft[NFT.caps].length;
    const l = nft[NFT.clothes].length;
    const allPossible = h * j * k * l; // 所有的可能性
    const hp = (j - 1) * (k * l) + (k - 1) * l + l; // 大于这个数表示 h 位一定大于 1
    const jp = (k - 1) * l + l;
    const kp = l;
    /**
     * ****h*j*k*l
     * n = (h-1)*(j*k*l) + (j-1)*(k*l) + (k-1)*l + l
     */
    oldNftMap.clear();
    for (let i = 0; i < 12; i++) {
      const randomNum = getRandomNumber(allPossible);
      if (oldNftMap.has(randomNum)) {
        i = i - 1;
        continue;
      }
      oldNftMap.add(randomNum);
      let hs = 1;
      let js = 1;
      let ks = 1;
      let ls = 1;
      if (randomNum - hp > 0) {
        hs = (randomNum - (randomNum % hp)) / (j * k * l) + 1;
      }
      const hn = (hs - 1) * (j * k * l);
      if (randomNum - hn - jp > 0) {
        js = (randomNum - hn - ((randomNum - hn) % jp)) / (k * l) + 1;
      }
      const jn = (js - 1) * (k * l);
      if (randomNum - hn - jn - kp > 0) {
        ks = (randomNum - hn - jn - ((randomNum - hn - jn) % kp)) / l + 1;
      }
      const kn = (ks - 1) * l;
      if (randomNum - hn - jn - kn > 0) {
        ls = randomNum - hn - jn - kn;
      }
      const drawParams = getImageByIndex({
        backgroundIndex: hs - 1,
        capIndex: ks - 1,
        glasseIndex: js - 1,
        clotheIndex: ls - 1,
      });
      const result = await draw(drawParams);
      arr.push(result);
    }
    return arr;
  }
  useEffect(() => {
    getRandom12().then(r => setNft12(r));
    const timer = setInterval(async () => {
      const r = await getRandom12();
      setNft12(r);
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
