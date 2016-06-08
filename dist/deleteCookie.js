function deleteAllCookies() {
    var c = document.cookie.split("; ");
    for (var i in c)
        document.cookie = /^[^=]+/.exec(c[i]) + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
}
deleteAllCookies();
//# sourceMappingURL=deleteCookie.js.map