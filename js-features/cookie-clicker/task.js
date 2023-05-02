const cookie = document.querySelector('#cookie');
const clickerCounter = document.querySelector('#clicker__counter');

cookie.addEventListener('click', () => {
    cookie.classList.toggle('size');
    clickerCounter += 1;
});
