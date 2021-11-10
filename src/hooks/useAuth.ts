import { useCallback } from 'react';
import { useWeb3React, UnsupportedChainIdError } from '@web3-react/core';
import { NoBscProviderError } from '@binance-chain/bsc-connector';
import {
  NoEthereumProviderError,
  UserRejectedRequestError as UserRejectedRequestErrorInjected,
} from '@web3-react/injected-connector';
import {
  UserRejectedRequestError as UserRejectedRequestErrorWalletConnect,
  WalletConnectConnector,
} from '@web3-react/walletconnect-connector';
import { connectorLocalStorageKey } from '@kaco/uikit';

import { injectedConnector } from 'utils/web3React';
import { setupNetwork } from 'utils/wallet';

const useAuth = () => {
  const { activate, deactivate } = useWeb3React();

  const login = () => {
    activate(injectedConnector, async (error: Error) => {
      if (error instanceof UnsupportedChainIdError) {
        const hasSetup = await setupNetwork();
        if (hasSetup) {
          activate(injectedConnector);
        }
      } else {
        window.localStorage.removeItem(connectorLocalStorageKey);
        if (error instanceof NoEthereumProviderError || error instanceof NoBscProviderError) {
          console.error('Provider Error', 'No provider was found');
        } else if (
          error instanceof UserRejectedRequestErrorInjected ||
          error instanceof UserRejectedRequestErrorWalletConnect
        ) {
          if (injectedConnector instanceof WalletConnectConnector) {
            const walletConnector = injectedConnector as WalletConnectConnector;
            walletConnector.walletConnectProvider = null;
          }
          console.error('Authorization Error', 'Please authorize to access your account');
        } else {
          console.error(error.name, error.message);
        }
      }
    });
  };

  const logout = useCallback(() => {
    deactivate();
  }, [deactivate]);

  return { login, logout };
};

export default useAuth;
