import React from 'react';
import styled from 'styled-components';

import Modal from './index';
import useAuth from 'hooks/useAuth';
import metamask from './metamask.svg';

const ConnectWalletModalWarp = styled.div``;

const ConnectWalletModal = ({ visible, onClose }) => {
  const { login } = useAuth();
  return (
    <Modal visible={visible} onClose={onClose} style={{ width: '400px' }}>
      <ConnectWalletModalWarp className="space-x-4 flex items-center flex-wrap justify-center py-10 px-6">
        <div
          className="text-center cursor-pointer transition duration-200 hover:opacity-80"
          onClick={() => {
            login();
            onClose();
          }}
        >
          <img className="inline-block w-16" src={metamask} alt="metamask" />
          <p className="text-secondaryTextColor text-sm mt-4">Metamask</p>
        </div>
      </ConnectWalletModalWarp>
    </Modal>
  );
};

export default React.memo(ConnectWalletModal);
