const dropdownValue = document.querySelector('.dropdown__value');
const dropdownList = document.querySelector('.dropdown__list');

document.querySelectorAll('.dropdown__link').forEach(element => { 
    element.href = '#0';
});

dropdownValue.addEventListener('click', () => {
    dropdownList.classList.add('dropdown__list_active');
});


dropdownList.addEventListener('click', (evt) => {
    let item = evt.target;
    dropdownValue.textContent = item.textContent;
    dropdownList.classList.remove('dropdown__list_active');
});