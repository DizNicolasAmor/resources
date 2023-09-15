enum SIZES {
  XXS = 'XXS',
  XS = 'XS',
  S = 'S',
  M = 'M',
  L = 'L',
  XL = 'XL',
  XXL = 'XXL',
}

type TClothe = {
  id: number,
  size: SIZES,
  available: boolean,
  availablequantity: number,
};

const sizesOrder: string[] = [
  SIZES.XXS,
  SIZES.XS,
  SIZES.S,
  SIZES.M,
  SIZES.L,
  SIZES.XL,
  SIZES.XXL,
];

const randomClothe: TClothe[] = [
  {id: 2192798, size: SIZES.L, available: false, availablequantity: 0},
  {id: 2192799, size: SIZES.M, available: false, availablequantity: 0},
  {id: 2192800, size: SIZES.S, available: false, availablequantity: 0},
  {id: 2192801, size: SIZES.XL, available: false, availablequantity: 0},
  {id: 2192802, size: SIZES.XS, available: true, availablequantity: 1},
  {id: 2192802, size: SIZES.XXL, available: true, availablequantity: 3},
];

const byClotheSize = (a: TClothe, b: TClothe): number => {
  if (sizesOrder.indexOf(a.size) < sizes.indexOf(b.size)) {
    return -1;
  }
  if (sizesOrder.indexOf(a.size) > sizes.indexOf(b.size)) {
    return 1;
  }
  return 0;
};

console.log('SIMPLE TEST');
console.log('RANDOM CLOTHE BEFORE', randomClothe.map(s =>s.size));
console.log('RANDOM CLOTHE AFERT', randomClothe.sort(bySize).map(s =>s.size));
