export const truncateString = (str: string, max: number): string => {
  if(str.length > max) {
    return `${str.substring(0,max)}...`;
  }

  return str;
};
