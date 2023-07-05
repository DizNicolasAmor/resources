const truncateString = (str, max) => {
  if(str.length > max)
      return `${str.substring(0,max)}...`;
  return str;
};

const example = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit';

console.log(truncateString(example, 36));
