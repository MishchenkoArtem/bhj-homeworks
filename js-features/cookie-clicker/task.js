const cookie = document.querySelector('#cookie');
const clickerCounter = document.querySelector('#clicker__counter');

cookie.addEventListener('click', () => {
    if (cookie.style.width='200px') {
        cookie.style.width='250px'
    } else {
        cookie.style.width='200px'
    }
    
    clickerCounter += 1;
});