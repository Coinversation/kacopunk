import React from 'react';
import { useWeb3React } from '@web3-react/core';

import HeaderComponent from 'components/Header';

const Header = (): JSX.Element => {
  const { account } = useWeb3React();
  console.log(account);
  return <HeaderComponent account={account} />;
};

export default Header;
