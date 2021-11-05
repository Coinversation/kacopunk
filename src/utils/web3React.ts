import { Web3Provider } from '@ethersproject/providers';
import { InjectedConnector } from '@web3-react/injected-connector';

import { chainId } from 'config/constants/tokens';

const POLLING_INTERVAL = 12000;

export const injectedConnector = new InjectedConnector({ supportedChainIds: [chainId] });

export const getLibrary = (provider): Web3Provider => {
  const library = new Web3Provider(provider);
  library.pollingInterval = POLLING_INTERVAL;
  return library;
};
