import { createSlice } from '@reduxjs/toolkit';

import { RootState } from 'stores';
import {
  backgrounds,
  backgroundNames,
  caps,
  capNames,
  clothes,
  clotheNames,
  glasses,
  glasseNames,
  rarity,
} from './assets';

export enum NFT {
  caps = 'caps',
  glasses = 'glasses',
  clothes = 'clothes',
  backgrounds = 'backgrounds',
}

export interface homepageState {
  nft: {
    [NFT.backgrounds]: Array<string>;
    [NFT.caps]: Array<string>;
    [NFT.glasses]: Array<string>;
    [NFT.clothes]: Array<string>;
  };
  nftName: {
    [NFT.backgrounds]: Array<string>;
    [NFT.caps]: Array<string>;
    [NFT.glasses]: Array<string>;
    [NFT.clothes]: Array<string>;
  };
  nftRarity: Object;
}

const initialState: homepageState = {
  nft: {
    [NFT.backgrounds]: backgrounds,
    [NFT.caps]: caps,
    [NFT.clothes]: clothes,
    [NFT.glasses]: glasses,
  },
  nftName: {
    [NFT.backgrounds]: backgroundNames,
    [NFT.caps]: capNames,
    [NFT.clothes]: clotheNames,
    [NFT.glasses]: glasseNames,
  },
  nftRarity: rarity,
};

export const homepageSlice = createSlice({
  name: 'homepage',
  initialState,
  reducers: {},
});

export const selectNft = (state: RootState) => state.homepage.nft;
export const selectNftName = (state: RootState) => state.homepage.nftName;
export const selectNftRarity = (state: RootState) => state.homepage.nftRarity;

export default homepageSlice.reducer;
