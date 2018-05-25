const truncateString = (str, max) => {
  if(str.length > max)
      return `${str.substring(0,max)}...`;
  return str;
};

// const str1 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit';
// console.log(truncateString(str1, 36));
