const fs = require('fs');
const path = require('path');
const ALL = require('../db/results.json');
let ALL_D = [];
for (let i = 0; i < ALL.length; i++) {
  const _item_a = ALL[i].split('|');
  ALL_D.push(..._item_a);
}
//  [Backgrounds, Clothes, Header, Caps, Glasses]
const Backgrounds = [
  'Desert',
  'Green Planet',
  'Blue Ink Color',
  'Red Ink Color',
  'Green Thread',
  'Hazy Night',
  'Purple Aurora',
  'Purple Ripples',
  'Green Ripple',
  'Water Emulsion',
  'Yellow Aurora',
  'Cyan Aurora',
];
const Clothes = [
  'Batsuit',
  'Spacesuits',
  'Cardigan-Dark Color',
  'Cardigan-Sparkly',
  'Artist',
  'Bathing Ring',
  'Blue Coat',
  'Flowered Dress',
  'Green Sweater',
  'Leisure',
  'Miners',
  'Musician',
  'Purple Sweater',
];
const Header = ['Header'];
const Caps = [
  'Cowboy',
  'Light Wave',
  'Blue Light',
  'Knit Cap',
  'Searchlights',
  'Boy Scout',
  'Color Strip',
  'NEON light',
  'Pumpkins',
  'Pussycat',
  'Swimming Cap',
  'Waves',
  'Yellow Strip',
];
const Glasses = [
  'Binoculars',
  'Space Glasses',
  'Miner’s Glasses',
  'Swimming Goggles',
  'Blotchy',
  'Fire Rod',
  'Flash',
  'Green Color',
  'Green Light',
  'Pastels',
  'Pixelation',
  'Purple Color',
  'Yellow Light',
];
// [ 12, 13, 1, 13, 13 ]
// console.log([Backgrounds.length, Clothes.length, Header.length, Caps.length, Glasses.length]);
let bg = [];
let cloth = [];
let header = [];
let cap = [];
let glasses = [];
// Backgrounds 的稀有度
for (let i = 0; i < ALL_D.length; i++) {
  if (Backgrounds.includes(ALL_D[i])) {
    bg.push(ALL_D[i]);
  }
  if (Clothes.includes(ALL_D[i])) {
    cloth.push(ALL_D[i]);
  }
  if (Header.includes(ALL_D[i])) {
    header.push(ALL_D[i]);
  }
  if (Caps.includes(ALL_D[i])) {
    cap.push(ALL_D[i]);
  }
  if (Glasses.includes(ALL_D[i])) {
    glasses.push(ALL_D[i]);
  }
}
// console.log(bg, cloth, header, cap, glasses);
console.log(bg.length, cloth.length, header.length, cap.length, glasses.length);
const bg_map = _toMap(Backgrounds, bg);
const cloth_map = _toMap(Clothes, cloth);
const header_map = _toMap(Header, header);
const cap_map = _toMap(Caps, cap);
const glasses_map = _toMap(Glasses, glasses);
function _toMap(Items, item) {
  let _item_map = {};
  for (let i = 0; i < Items.length; i++) {
    const _item_bg_len = ALL_D.filter(v => v === Items[i]).length;
    _item_map[Items[i]] = ((_item_bg_len / item.length) * 100).toFixed(2);
  }
  return _item_map;
}

const outputPath = path.resolve(__dirname, '../../src/assets/json/karsier_rarity.json');

fs.writeFile(
  outputPath,
  JSON.stringify({
    Backgrounds: bg_map,
    Clothes: cloth_map,
    Header: header_map,
    Caps: cap_map,
    Glasses: glasses_map,
  }),
  function (err) {
    if (err) {
      throw err;
    }
  }
);
