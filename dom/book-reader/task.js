const fontSize = Array.from(document.querySelectorAll('.font-size'));
const book = document.querySelector('.book');



fontSize.forEach((element, index) => {
    element.addEventListener('click', evt => {
        evt.preventDefault();
    });
});