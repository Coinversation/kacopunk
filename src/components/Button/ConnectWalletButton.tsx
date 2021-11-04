import React, { useState } from 'react';

import Button from './index';
import ConnectWalletModal from 'components/Modal/ConnectWallet';

const ConnectWalletButton = props => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Button onClick={() => setVisible(true)} {...props}>
        Connect Wallet
      </Button>

      <ConnectWalletModal visible={visible} onClose={() => setVisible(false)} />
    </>
  );
};

export default ConnectWalletButton;
