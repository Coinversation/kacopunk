import React from 'react';
import styled from 'styled-components';

import Button from 'components/Button';
import Modal from './index';

const MintModalWarp = styled.div``;

const MintFooter = () => (
  <div className="flex flex-col items-center justify-center">
    <p className="text-center mb-1 text-secondaryTextColor">Total Cost: 1.456 ETH</p>
    <Button type="primary" block>
      Confirm
    </Button>
  </div>
);

const MintModal = ({ visible, onClose }) => {
  return (
    <Modal
      visible={visible}
      onClose={onClose}
      title={<span className="text-primary text-xl">Buy NFT</span>}
      footer={<MintFooter />}
    >
      <MintModalWarp>
        <p className="flex justify-end text-secondaryTextColor mb-1">Balance: 0.001ETH</p>
        <div className="px-6 py-4 bg-gray-500 rounded-xl input-container flex items-center">
          <input
            type="text"
            placeholder="Please enter the Amount"
            className="outline-none border-none bg-transparent flex-auto"
          />
          <button className="px-4 py-2 bg-gray-600 rounded-xl text-primary hover:opacity-70 active:opacity-60">
            Max
          </button>
        </div>
      </MintModalWarp>
    </Modal>
  );
};

export default React.memo(MintModal);
