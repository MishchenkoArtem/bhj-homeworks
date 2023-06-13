let text = document.querySelector('#editor');
text.addEventListener('change', changeHandler);

function changeHandler() {
    localStorage.setItem('text', this.value);
}

function checkStorage() {
    const item = localStorage.getItem('text');
    text.value = item;
}

checkStorage();