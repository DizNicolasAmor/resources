const getCookie = (name: string): string => {
    const nameLenPlus = name.length + 1;
    return (
        document.cookie
            .split(';')
            .map(c => c.trim())
            .filter(cookie => cookie.substring(0, nameLenPlus) === `${name}=`)
            .map(cookie => decodeURIComponent(cookie.substring(nameLenPlus)))[0] || ''
    );
};
