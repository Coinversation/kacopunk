import { createSlice } from '@reduxjs/toolkit';

import { RootState } from 'stores';
import { backgrounds, caps, clothes, glasses } from './assets';

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
}

const initialState: homepageState = {
  nft: {
    [NFT.backgrounds]: backgrounds,
    [NFT.caps]: caps,
    [NFT.clothes]: clothes,
    [NFT.glasses]: glasses,
  },
};

export const homepageSlice = createSlice({
  name: 'homepage',
  initialState,
  reducers: {},
});

export const selectNft = (state: RootState) => state.homepage.nft;

export default homepageSlice.reducer;