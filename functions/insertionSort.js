const insertionSort = items => {
  for (let i = 0; i < items.length; i++) {
    let value = items[i]
    for (var j = i - 1; j > -1 && items[j] > value; j--) {
      items[j + 1] = items[j];
    }
    items[j + 1] = value;
  }
};

