import React, { useState, useEffect } from 'react';
import { useWeb3React } from '@web3-react/core';
import { BigNumber as BigNumberType } from '@ethersproject/bignumber';

import { default as BannerComponent } from 'components/Homepage/Banner';
import { CONTRACT_STATE } from 'config/constants/state';
import { NFT } from 'containers/Homepage/slice';
import { useKarsierContract } from 'hooks/useContract';
import { CONTRACT_ADDRESS } from 'config';
import { chainId } from 'config/constants/tokens';
import draw from 'utils/draw';

const oldNftMap = new Set();

function getRandomNumber(length: number) {
  return Math.ceil(Math.random() * length);
}

const Banner = ({ nft, getImageByIndex }): JSX.Element => {
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

  // vip
  const [vipSaleReserved, setVipSaleReserved] = useState<number>();
  const [state, setState] = useState<CONTRACT_STATE>(CONTRACT_STATE.paused);
  const contract = useKarsierContract(CONTRACT_ADDRESS[chainId]);
  const { account } = useWeb3React();

  useEffect(() => {
    if (contract) {
      contract.vipSaleReserved(account).then((reserved: BigNumberType) => {
        setVipSaleReserved(reserved.toNumber());
      });
      // 状态
      contract.saleState().then((state: BigNumberType) => {
        setState(state.toNumber());
      });
    }
  }, [contract]);

  return <BannerComponent nft={nft12} state={state} isVip={vipSaleReserved > 0} />;
};

export default Banner;
