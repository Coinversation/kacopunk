import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useBalance } from 'hooks/useBalance';
import { useFPDSContract } from 'hooks/useContract';
import Button from 'components/Button';
import Modal from './index';
import { BigNumber } from '@ethersproject/bignumber';

const MintModalWarp = styled.div``;

const MintFooter = () => (
  <div className="flex flex-col items-center justify-center">
    <p className="text-center text-xs mb-4 text-secondaryTextColor">Total Cost: 1.456 BNB</p>
    <Button type="primary" block>
      Confirm
    </Button>
  </div>
);

const MintModal = ({ visible, onClose }) => {
  const balance: number = useBalance();

  // --- test use ---
  const contract = useFPDSContract('0x3bE50Adf25a2b4695EEa4BEC33784E64E365A8A0'); // 0x304D835e60737b8F952dc1b7F145eB018D026cB8
  useEffect(() => {
    if (contract) {
      contract.price().then((v: BigNumber) => {
        console.log(v.toString());
      });
    }
  }, [contract]);

  return (
    <Modal
      visible={visible}
      onClose={onClose}
      title={<span className="text-primary text-xl">Buy NFT</span>}
      footer={<MintFooter />}
    >
      <MintModalWarp>
        <p className="flex justify-end text-secondaryTextColor text-xs mb-3">Balance: {balance ? balance : 0}BNB</p>
        <div className="px-6 py-4 bg-bgColor rounded-xl input-container flex items-center">
          <input
            type="text"
            placeholder="Please enter the Amount"
            className="outline-none border-none bg-transparent flex-auto text-white"
          />
          <button className="px-3 py-1.5 text-sm border-primary border-2 rounded-xl text-primary hover:opacity-70 active:opacity-60">
            Max
          </button>
        </div>
      </MintModalWarp>
    </Modal>
  );
};

export default React.memo(MintModal);
