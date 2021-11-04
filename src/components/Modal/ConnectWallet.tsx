import React from 'react';
import styled from 'styled-components';

import Modal from './index';

const ConnectModalWarp = styled.div``;

const ConnectModal = ({ visible, onClose }) => {
  return (
    <Modal visible={visible} onClose={onClose} title={<span className="text-primary text-xl">Connect Wallet</span>}>
      <ConnectModalWarp>
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
      </ConnectModalWarp>
    </Modal>
  );
};

export default React.memo(ConnectModal);
