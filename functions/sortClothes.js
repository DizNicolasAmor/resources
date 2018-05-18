/* SORT CLOTHES BY SIZE */

const shirt = [
  {id: 2192798, size: "L", available: false, availablequantity: 0},
  {id: 2192799, size: "M", available: false, availablequantity: 0},
  {id: 2192800, size: "S", available: false, availablequantity: 0},
  {id: 2192801, size: "XL", available: false, availablequantity: 0},
  {id: 2192802, size: "XS", available: true, availablequantity: 1},
  {id: 2192802, size: "XXL", available: true, availablequantity: 3}
];

const sizes = ['XXS', 'XS', 'S', 'M', 'L','XL', 'XXL'];

const bySize = (a,b) => {
  if (sizes.indexOf(a.size) < sizes.indexOf(b.size))
    return -1;
  if (sizes.indexOf(a.size) > sizes.indexOf(b.size))
    return 1;
  return 0;
};

console.log('SHIRT BEFORE', shirt.map(s =>s.size));
console.log('SHIRT AFERT', shirt.sort(bySize).map(s =>s.size));

