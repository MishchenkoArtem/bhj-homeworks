const rotatorCase = document.querySelector('.rotator__case');
let currentElement = rotatorCase;
let previousElement = rotatorCase;

const interval = setInterval(() => {
    if (currentElement.classList.contains('rotator__case_active')) {

        currentElement = currentElement.nextElementSibling;
        previousElement = currentElement.previousElementSibling;

        currentElement.classList.add('rotator__case_active');
        previousElement.classList.remove('rotator__case_active');
    }
}, 1000);