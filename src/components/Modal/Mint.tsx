import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { useBalance } from 'hooks/useBalance';
import { BigNumber as BigNumberType } from '@ethersproject/bignumber';
import { formatUnits, parseEther } from '@ethersproject/units';
import { useWeb3React } from '@web3-react/core';
import BigNumber from 'bignumber.js';

import { CONTRACT_ADDRESS } from 'config';
import { CONTRACT_STATE } from 'config/constants/state';
import { useKarsierContract } from 'hooks/useContract';
import Button from 'components/Button';
import Modal from './index';
import { useNotification } from 'hooks/useNotification';

const MintModalWarp = styled.div``;

const MintFooter = ({ totalCost, balance, state, handleMint, handlePreMint }) => {
  const onClickComfirm = useCallback(() => {
    // todo ----
    // 1. no account   return
    // 2. max bug
    if (new BigNumber(balance).lt(totalCost)) return;
    if (state === CONTRACT_STATE.paused) return;
    if (state === CONTRACT_STATE.presale) {
      return handlePreMint();
    }
    if (state === CONTRACT_STATE.live) {
      return handleMint();
    }
  }, [state, balance, handlePreMint, handleMint]);

  return (
    <div className="flex flex-col items-center justify-center">
      <p className="text-center text-xs mb-4 text-secondaryTextColor">Total Cost: {totalCost} BNB</p>
      <Button type="primary" block onClick={onClickComfirm}>
        {(state === CONTRACT_STATE.paused || null) && "Can't Mint"}
        {(state === CONTRACT_STATE.presale || null) && 'Pre Mint'}
        {(state === CONTRACT_STATE.live || null) && 'Confirm'}
      </Button>
    </div>
  );
};

const MintModal = ({ visible, onClose }) => {
  const balance: number = useBalance();
  const contract = useKarsierContract(CONTRACT_ADDRESS);
  const [price, setPrice] = useState<number>(0);
  const [count, setCount] = useState<number>();
  const [state, setState] = useState<CONTRACT_STATE>(CONTRACT_STATE.paused);
  const [totalCost, setTotalCost] = useState(0);
  const { account } = useWeb3React();
  const [notice, holder] = useNotification();

  useEffect(() => {
    if (contract && visible) {
      // 价格
      contract.price().then((v: BigNumberType) => {
        setPrice(Number(formatUnits(v)));
      });
      // 状态
      contract.saleState().then((state: BigNumberType) => {
        setState(state.toNumber());
      });
    }
  }, [contract, visible, setPrice]);

  const onClickMax = useCallback(() => {
    // int
    // < maxPurchase
    let _count = new BigNumber(balance).dividedToIntegerBy(price).toNumber();
    // maxPurchase
    contract.maxPurchase().then((_maxPurchase: BigNumberType) => {
      const maxPurchase = _maxPurchase.toNumber();
      if (new BigNumber(_count).gte(maxPurchase)) {
        _count = maxPurchase;
      }
      setCount(_count);
    });
  }, [balance, price]);

  useEffect(() => {
    if (state === CONTRACT_STATE.presale) {
      setCount(1);
    }
  }, [state]);

  useEffect(() => {
    console.log(count, price);
    setTotalCost(new BigNumber(count || 0).times(price || 0).toNumber());
  }, [count, price]);

  // 预售
  const handlePreMint = useCallback(() => {
    console.log(totalCost, parseEther(`${totalCost}`).toString());
    contract.preSaleReserved(account).then((auth: BigNumberType) => {
      if (auth.gt(0)) {
        contract
          .preSaleMint(account, { from: account, value: parseEther(`${totalCost}`) })
          .then(result => {
            console.log(result);
          })
          .catch(err => {
            console.log(err);
            notice({ content: err?.data?.message });
          });
      }
    });
  }, [totalCost, account]);

  // mint
  const handleMint = useCallback(() => {
    contract.mint(account, count).then(result => {
      console.log(result);
    });
  }, [count, account]);

  return (
    <Modal
      visible={visible}
      onClose={onClose}
      title={<span className="text-primary text-xl">Buy NFT</span>}
      footer={
        <MintFooter
          totalCost={totalCost}
          balance={balance}
          state={state}
          handleMint={handleMint}
          handlePreMint={handlePreMint}
        />
      }
    >
      <MintModalWarp>
        <p className="flex justify-end text-secondaryTextColor text-xs mb-3">Balance: {balance ? balance : 0}BNB</p>
        <div className="px-6 py-4 bg-bgColor rounded-xl input-container flex items-center">
          <input
            disabled={state === CONTRACT_STATE.presale}
            type="text"
            placeholder="Please enter the Amount"
            className="outline-none border-none bg-transparent flex-auto text-secondaryTextColor"
            value={count || ''}
            onChange={event => setCount(Number(event.target.value))}
          />
          <button
            className="px-3 py-1.5 text-sm border-primary border-2 rounded-xl text-primary hover:opacity-70 active:opacity-60"
            onClick={onClickMax}
          >
            Max
          </button>
        </div>
      </MintModalWarp>
      {holder}
    </Modal>
  );
};

export default React.memo(MintModal);
