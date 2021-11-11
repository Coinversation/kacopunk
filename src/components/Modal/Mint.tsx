import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { useBalance } from 'hooks/useBalance';
import { BigNumber as BigNumberType } from '@ethersproject/bignumber';
import { formatUnits, parseEther } from '@ethersproject/units';
import { useWeb3React } from '@web3-react/core';
import BigNumber from 'bignumber.js';

import { CONTRACT_STATE } from 'config/constants/state';
import { useKarsierContract } from 'hooks/useContract';
import { CONTRACT_ADDRESS } from 'config';
import { chainId } from 'config/constants/tokens';
import Button from 'components/Button';
import Modal from './index';
import { useNotification } from 'hooks/useNotification';
import { BASE_NETWORK_CONFIG } from 'config';

const MintModalWarp = styled.div``;

const MintFooter = ({ totalCost, balance, state, handleMint, errorNotice }) => {
  const onClickComfirm = useCallback(() => {
    if (new BigNumber(balance).lt(totalCost)) {
      errorNotice({
        content: `Insufficient balance`,
      });
      return;
    }
    if (state === CONTRACT_STATE.paused) {
      errorNotice({
        content: 'The contract has not yet opened, so stay tuned!',
      });
      return;
    }
    if (state === CONTRACT_STATE.live) {
      return handleMint();
    }
  }, [state, balance, handleMint]);

  return (
    <div className="flex flex-col items-center justify-center">
      <p className="text-center text-xs mb-4 text-secondaryTextColor">Total Cost: {totalCost} BNB</p>
      <Button type="primary" block onClick={onClickComfirm}>
        {(state === CONTRACT_STATE.paused || null) && "Can't Mint"}
        {(state === CONTRACT_STATE.live || null) && 'Confirm'}
      </Button>
    </div>
  );
};

const MintModal = ({ visible, onClose }) => {
  const balance: number = useBalance();
  const contract = useKarsierContract(CONTRACT_ADDRESS[chainId]);
  const [price, setPrice] = useState<number>(0);
  const [count, setCount] = useState<number>();
  const [vipSaleReserved, setVipSaleReserved] = useState<number>();
  const [state, setState] = useState<CONTRACT_STATE>(CONTRACT_STATE.paused);
  const [totalCost, setTotalCost] = useState(0);
  const { account } = useWeb3React();
  const { notice, errorNotice, holder } = useNotification();

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
      contract.vipSaleReserved(account).then((reserved: BigNumberType) => {
        setVipSaleReserved(reserved.toNumber());
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
    let _cost = 0;
    let _count = count;
    if (vipSaleReserved > 0) {
      _cost += new BigNumber(vipSaleReserved || 0)
        .times(price || 0)
        .times(1 / 2)
        .toNumber();
      _count -= vipSaleReserved;
    }
    _cost = new BigNumber(_count)
      .times(price || 0)
      .plus(_cost || 0)
      .toNumber();
    setTotalCost(_cost);
  }, [count, price]);

  // mint
  const handleMint = useCallback(() => {
    contract
      .mint(account, count, { from: account, value: parseEther(`${totalCost}`) })
      .then(result => {
        // 0x014eecb78d4ce4eced79b033b7fbe89af05fd59ec27c6b2eb7c1c80fdbcf15cb
        notice({
          duration: 4,
          content: (
            <div>
              <h3>mint successful!</h3>
              <a
                href={`${[BASE_NETWORK_CONFIG[`${chainId}`].blockExplorerUrls]}/tx/${result}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Click me, Watch the progress
              </a>
            </div>
          ),
        });
        setTimeout(() => {
          onClose();
        }, 4000);
      })
      .catch(err => {
        errorNotice({ content: err?.data?.message });
      });
  }, [totalCost, account]);

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
          errorNotice={errorNotice}
        />
      }
    >
      <MintModalWarp>
        <p className="flex justify-end text-secondaryTextColor text-xs mb-3">Balance: {balance ? balance : 0}BNB</p>
        <div className="px-6 py-4 bg-bgColor rounded-xl input-container flex items-center">
          <input
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
