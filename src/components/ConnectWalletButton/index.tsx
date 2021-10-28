import React from 'react';
import { Button, useWalletModal } from '@kaco/uikit';
import useAuth from 'hooks/useAuth';

const ConnectWalletButton = props => {
  const { login, logout } = useAuth();
  const { onPresentConnectModal } = useWalletModal(login, logout);

  return (
    <Button onClick={onPresentConnectModal} {...props}>
      Connect Wallet
    </Button>
  );
};

export default ConnectWalletButton;
