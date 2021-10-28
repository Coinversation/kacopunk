export enum DIR_NAMES {
  caps = 'caps',
  clothes = 'clothes',
  glasses = 'glasses',
  backgrounds = 'backgrounds',
}

export const backgrounds = [
  { caption: 'Pumpkins', size: '16.89%' },
  { caption: 'Pussycat', size: '18.24%' },
  { caption: 'Blue Light', size: '3.19%' },
  { caption: 'Boy Scout', size: '9.18%' },
  { caption: 'NEON light', size: '12.76%' },
  { caption: 'Colorful', size: '29.10%' },
  { caption: 'Pussycat', size: '18.24%' },
  { caption: 'Blue Light', size: '3.19%' },
  { caption: 'Boy Scout', size: '9.18%' },
  { caption: 'NEON light', size: '12.76%' },
  { caption: 'Colorful', size: '29.10%' },
];

export async function getPart(dirName: DIR_NAMES) {
  const p = [];
  for (let i = 1; i <= 11; i++) {
    const result = await import(`./${dirName}/${i}.svg`);
    p.push(result.default);
  }

  return p;
}
