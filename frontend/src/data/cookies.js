function getCookies() {
    return document.cookie
        .split(";")
        .map(cookie => cookie.split("="))
        .reduce((accumulator, [key, value]) =>
            ({...accumulator, [key.trim()]: decodeURIComponent(value)}),
        {});
}

function setCookie(key, value) {
    document.cookie = `${key}=${encodeURIComponent(value)}`;
}

function deleteCookies() {
    const expire = new Date();
    expire.setMonth(expire.getMonth() - 1);
    setExpiry(expire);
}

function setExpiry(expiry) {
    if (!(expiry || expiry instanceof Date)) {
        expiry = new Date();
        expiry.setMonth(expiry.getMonth() + 1);
    }
    document.cookie = "expires=" + expiry.toUTCString();
}

function getExpiry() {
    return new Date.parse(getCookies().expires);
}

export default {
    getCookies,
    setCookie,
    setExpiry,
    deleteCookies,
    getExpiry,
}