export enum ChainId {
  MAINNET = 56,
  TESTNET = 97,
}

export const chainId = parseInt(process.env.REACT_APP_CHAIN_ID, 10);
