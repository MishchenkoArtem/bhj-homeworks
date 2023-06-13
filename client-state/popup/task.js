const popup = document.querySelector('.modal');
const popupClose = document.querySelector('.modal__close');

popupClose.addEventListener('click', removeCookie);

if (!document.cookie) {
    setCookie('className', 'modal_active');
    popup.classList.add(`${getCookie()}`);
}

function setCookie(key, value) {
    document.cookie = encodeURIComponent(key) + '=' + encodeURIComponent(value);
}

function getCookie() {
    const pairs = document.cookie;
    const cookie = pairs.split('=')[1];
    return cookie;
}

function removeCookie() {
    popup.classList.remove(`${getCookie()}`);
}