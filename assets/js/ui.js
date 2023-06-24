//config
let iconNum = 10;
let themes = ['dark', 'minato', 'pandaneko'];
let cookies = {};

function jump(url) {
    window.location.assign(url);
}

function randInt(max = 10) { // less than max
    return Math.floor(Math.random() * max);
}

function inArray(value, array) {
    if(!Array.isArray(array)) {
        return false
    }
    for (let i = 0; i < array.length; i++) {
        if (value === array[i]) {
            return true;
        }
    }
    return false;
}

function setIcon() {
    let icon = document.getElementById('icon');
    let iconSrc = `/img/icon/${randInt(iconNum)}.png`
    console.log(iconSrc);
    icon.setAttribute('src', iconSrc);
}

function setTheme(theme, cookie = false) {
    if (!inArray(theme, themes)) {
        console.log('Not a theme');
        return false;
    }
    document.body.setAttribute('theme', theme);
    if(cookie) {
        document.cookie = `Theme=${theme};path=/`;
    }
}

function getCookies() {
    let cookie = document.cookie.split(';');
    for (let i = 0; i < cookie.length; i++) {
        cookie[i] = cookie[i].trim();
        let eqIndex = cookie[i].indexOf('=');
        console.log(eqIndex);
        if (eqIndex === -1) {
            continue;
        }
        cookies[cookie[i].substring(0, eqIndex)] = cookie[i].substring(eqIndex + 1);
    }
}

getCookies();
setIcon();
setTheme(cookies.Theme ? cookies.Theme : 'dark');