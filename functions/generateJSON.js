const generateJSON = (elements) => {
  let fakeJSON = [];
  const getRandomItem = arr => arr[Math.floor(Math.random() * arr.length)];
  const generateRandomAlphaNum = (len) => {
      let str = "";
      for( ; str.length < len; str  += Math.random().toString(36).substr(2));
      return  str.substr(0, len);
  };
  const loremIpsum = 'Lorem ipsum dolor sit amet consectetur adipiscing elit lacus, blandit pulvinar convallis elementum accumsan fames nostra donec curabitur, litora felis habitant est erat nulla ultricies. Pretium nisl nulla mi id accumsan sodales etiam, odio nec porta imperdiet varius dis urna sapien, blandit mauris euismod tempus quis turpis. Mus sociosqu sapien mi aliquam ultricies habitant commodo condimentum, dictumst ullamcorper primis senectus tortor gravida curabitur, potenti rutrum dui cursus rhoncus accumsan hac.';

  const names = ['ProductName-1', 'ProductName-2', 'ProductName-3', 'ProductName-4', ];
  const brands = ['LG', 'Dell', 'HP', 'Samsung', 'Xioami', 'Huawei'];
  const categories = ['Celulares', 'Computadoras y Notebooks', 'TVs'];
  const subcategories = ['Notebook', 'Celulares 4G', 'Celulares 3G', 'Tablets'];

  const generateObject = (i) => ({
    index: i,
    productId: generateRandomAlphaNum(10) + i,
    name: getRandomItem(names),
    description: loremIpsum,
    bestPrice: 1,
    price: 1,
    image: 'http://placehold.it/125x125',
    brand: getRandomItem(brands),
    cathegory: getRandomItem(categories),
    subcathegory: getRandomItem(subcategories)
  });

  for(let i = 0; i < elements; i += 1) {
    fakeJSON.push(generateObject(i));
  }
  
  return fakeJSON;
};

console.log(generateJSON(4));
