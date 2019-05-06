export function setCookie(name, value, expiresDays) {
    var date = new Date();
    var text = '';

    date.setTime(date.getTime() + expiresDays * 24 * 3600 * 1000);

    text += name + "=" + value + ';'

    if (date) {
        text += "expires=" + date.toGMTString() + ";"
    }

    text += 'path =/' + ';';

    document.cookie = text;
}

export function getCookie(name) {
    var strCookie = document.cookie;
    var arrCookie = strCookie.split("; ");
    for (var i = 0; i < arrCookie.length; i++) {
        var arr = arrCookie[i].split("=");
        if (arr[0] == name) {
            return arr[1];
        }
    }
    return "";
}

export function removeCookie(name) {
    var date = new Date();

    date.setTime(date.getTime() + -1 * 24 * 3600 * 1000);

    document.cookie = name + "=''; expires=" + date.toGMTString() + ";path=/;";
}