const isPalindrome = str => {
    let i = 0;
    const length = str.length;
    while (i <= length - 1 - i) {
      if(str[i] !== str[length - 1 - i])
        return false;
      i += 1;
    }
    return true;
};

// console.log(isPalindrome('abbcbba'));
// console.log(isPalindrome('abcqwe'));

