const generateRandomAlphaNum = (len) => {
    let str = "";
    for( ; str.length < len; str  += Math.random().toString(36).substr(2));
    return  str.substr(0, len);
}

console.log(generateRandomAlphaNum(6));

