import React from 'react';
import { useWeb3React } from '@web3-react/core';

import HeaderComponent from 'components/Header';
import useAuth from 'hooks/useAuth';

const Header = (): JSX.Element => {
  const { logout } = useAuth();
  const { account } = useWeb3React();
  return <HeaderComponent account={account} logout={logout} />;
};

export default Header;
