import { ChainId } from 'config/constants/tokens';

export const BASE_BSC_SCAN_URLS = {
  [ChainId.BINANCE_MAINNET]: 'https://bscscan.com',
  [ChainId.BINANCE_TESTNET]: 'https://testnet.bscscan.com',
};

export const BASE_NETWORK_CONFIG = {
  // BNB 主网\_Smart Chain
  '56': {
    chainId: `0x${ChainId.BINANCE_MAINNET.toString(16)}`,
    chainName: 'binance-smart-chain',
    nativeCurrency: {
      name: 'BNB',
      symbol: 'bnb',
      decimals: 18,
    },
    rpcUrls: [
      'https://bsc-dataseed.binance.org',
      'https://bsc-dataseed1.ninicoin.io',
      'https://bsc-dataseed1.defibit.io',
      'https://bsc-dataseed2.defibit.io',
      'https://bsc-dataseed3.defibit.io',
      'https://bsc-dataseed4.defibit.io',
    ],
    blockExplorerUrls: ['https://bscscan.com'],
  },
  // BNB 测试网\_Smart Chain - Testnet
  '97': {
    chainId: `0x${ChainId.BINANCE_TESTNET.toString(16)}`,
    chainName: 'binance-smart-chain Testnet',
    nativeCurrency: {
      name: 'BNB',
      symbol: 'bnb',
      decimals: 18,
    },
    rpcUrls: [
      'https://data-seed-prebsc-1-s1.binance.org:8545',
      'https://data-seed-prebsc-2-s1.binance.org:8545',
      'https://data-seed-prebsc-1-s2.binance.org:8545/',
      'https://data-seed-prebsc-2-s2.binance.org:8545/',
      'https://data-seed-prebsc-1-s3.binance.org:8545/',
      'https://data-seed-prebsc-2-s3.binance.org:8545/',
    ],
    blockExplorerUrls: ['https://testnet.bscscan.com'],
  },
  // FTM
  '250': {
    chainId: `0x${ChainId.FANTOM_MAINNET.toString(16)}`,
    chainName: 'Fantom Opera',
    nativeCurrency: {
      name: 'ftm',
      symbol: 'FTM',
      decimals: 18,
    },
    rpcUrls: ['https://rpcapi.fantom.network'],
    blockExplorerUrls: ['https://ftmscan.com'],
  },
  '4002': {
    chainId: `0x${ChainId.FANTOM_TESTNET.toString(16)}`,
    chainName: 'Fantom testnet',
    nativeCurrency: {
      name: 'ftm',
      symbol: 'FTM',
      decimals: 18,
    },
    rpcUrls: ['https://rpc.testnet.fantom.network/'],
    blockExplorerUrls: ['https://testnet.ftmscan.com'],
  },
};

export const BASE_URL = 'https://www.kaco.finance';
export const BASE_BSC_SCAN_URL = BASE_BSC_SCAN_URLS[ChainId.BINANCE_MAINNET];

export const CONTRACT_ADDRESS = {
  [ChainId.BINANCE_MAINNET]: '',
  [ChainId.BINANCE_TESTNET]: '0x84735c6Ad1A6B98Cc3C549e28b8b30A702d0fAd8',
};
export const GAS_FEE = 3000;
