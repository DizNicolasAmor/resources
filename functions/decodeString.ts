export const decodeString = (encodedString: string): string => {
    const txt = document.createElement('textarea');
    txt.innerHTML = encodedString;

    return txt.value;
};
