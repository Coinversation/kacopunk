import React from 'react';
import { Button, useWalletModal } from '@kaco/uikit';
import useAuth from 'hooks/useAuth';

const ConnectWalletButton = (props: any): JSX.Element => {
  const { login, logout } = useAuth();
  const { onPresentConnectModal } = useWalletModal(login, logout);
  console.log(onPresentConnectModal);

  return (
    <Button onClick={onPresentConnectModal} {...props}>
      connect wallet
    </Button>
  );
};

export default ConnectWalletButton;
