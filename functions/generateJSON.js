const generateJSON = (elements) => {
  let fakeJSON = [];
  const getRandomItem = arr => arr[Math.floor(Math.random() * arr.length)];
  const generateRandomAlphaNum = (len) => {
      let str = "";
      for( ; str.length < len; str  += Math.random().toString(36).substr(2));
      return  str.substr(0, len);
  };
  const loremIpsum = 'Lorem ipsum dolor sit amet consectetur adipiscing elit lacus, blandit pulvinar convallis elementum accumsan fames nostra donec curabitur, litora felis habitant est erat nulla ultricies. Pretium nisl nulla mi id accumsan sodales etiam, odio nec porta imperdiet varius dis urna sapien, blandit mauris euismod tempus quis turpis. Mus sociosqu sapien mi aliquam ultricies habitant commodo condimentum, dictumst ullamcorper primis senectus tortor gravida curabitur, potenti rutrum dui cursus rhoncus accumsan hac.';
  const generateRandomPrice = () => (Number((Math.random()*1000).toFixed(2)));

  const names = ['ProductName-1', 'ProductName-2', 'ProductName-3', 'ProductName-4', 'ProductName-5'];
  const brands = ['LG', 'Dell', 'HP', 'Samsung', 'Xioami', 'Huawei'];
  const categories = ['Celulares y Tablets', 'Computadoras y Notebooks', 'TVs'];
  const subcategories = {
    'Celulares y Tablets': ['Moto E', 'Moto G', 'Moto Z', 'Huawei Y5', 'Nokia 1100', 'Samsung Galaxy S9', 'Samsung Galaxy S5'],
    'Computadoras y Notebooks': ['Computadora Acer', 'Notebook HP Coure i5', 'Notebook HP i3', 'Apple Imac Pro 27"', 'Mini Mac'],
    'TVs': ['Smart TV Led 50', 'Samrt TV 4k', 'TV Led 32']
  };
  const promotions = ['Lleve 3 x 2', '', 'Lleve 2 x 1', '', 'Hasta 6 cuotas sin interés', '', 'Hasta 3 cuotas sin interés', ''];

  const generateObject = (i) => {
    const category = getRandomItem(categories);
    const subcategory = getRandomItem(subcategories[category]);
    const price = generateRandomPrice();
    const bestPrice = Number((price*0.9).toFixed(2));
    return ({
      index: i,
      productId: generateRandomAlphaNum(10) + i,
      productName: getRandomItem(names),
      description: loremIpsum,
      promotion: getRandomItem(promotions),
      bestPrice,
      price,
      image: 'http://placehold.it/125x125',
      brand: getRandomItem(brands),
      category,
      subcategory
    });
  }
  
  for(let i = 0; i < elements; i += 1) {
    fakeJSON.push(generateObject(i));
  }
  
  return fakeJSON;
};

console.log(generateJSON(5));
