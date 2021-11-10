export enum ChainId {
  BINANCE_MAINNET = 56,
  BINANCE_TESTNET = 97,
  FANTOM_MAINNET = 250,
  FANTOM_TESTNET = 4002,
  ETHEREUM = 1,
  SOLANA_MAINNET = 4,
}

export const chainId = parseInt(process.env.REACT_APP_CHAIN_ID, 10);
