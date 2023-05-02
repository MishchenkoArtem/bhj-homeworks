const cookie = document.querySelector('#cookie');
const clickerCounter = document.querySelector('#clicker__counter');

cookie.addEventListener('click', () => {
    console.log('click here');
    if (cookie.style.width='200') {
        cookie.style.width='250'
    } else {
        cookie.style.width='200'
    }
    
    clickerCounter += 1;
});