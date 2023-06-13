const url = 'https://students.netoservices.ru/nestjs-backend/auth';
const user = document.querySelector('#user_id');
const welcome = document.querySelector('.welcome');
const signin = document.querySelector('.signin');
const form = document.forms.signin__form;

userInfo();

form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const formData = new FormData(form);

    const xhr = new XMLHttpRequest();
    xhr.open('POST', url);
    xhr.send(formData);
    xhr.addEventListener('load', () => {
        data = xhr.response;
        callback(data);
    });
});

const callback = (data) => {
    const dataObject = JSON.parse(data);
    localStorage.setItem('success', dataObject.success)
    localStorage.setItem('id', dataObject.user_id);

    userInfo();
}

function userInfo () {
    const success = localStorage.getItem('success');

    if (success === 'false') {
        alert('Неверный логин/пароль');
        form.reset();
    }

    if (success === 'true') {
        user.textContent = localStorage.getItem('id');
        signin.classList.remove('signin_active');
        welcome.classList.add('welcome_active');
    }
}