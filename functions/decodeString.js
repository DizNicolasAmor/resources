const decodeString = encodedString => {
    const txt = document.createElement('textarea');
    txt.innerHTML = encodedString;
    return txt.value;
};
