export const generateAnagram = (str: string): string =>
  str.split('').sort(()=> Math.random() - 0.5).join('');

const testString = 'abcde';

console.log('EASY TEST');
console.log(`ORIGINAL: ${testString} ---> ANAGRAM: ${generateAnagram(testString)}`);
console.log(`ORIGINAL: ${testString} ---> ANAGRAM: ${generateAnagram(testString)}`);
console.log(`ORIGINAL: ${testString} ---> ANAGRAM: ${generateAnagram(testString)}`);
console.log(`ORIGINAL: ${testString} ---> ANAGRAM: ${generateAnagram(testString)}`);
console.log(`ORIGINAL: ${testString} ---> ANAGRAM: ${generateAnagram(testString)}`);
