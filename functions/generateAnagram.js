const generateAnagram = (str) => {
  return str.split('').sort(()=> Math.random()-0.5) ;
}

// console.log(generateAnagram('abcde'));

