const tasksList = document.querySelector('.tasks__list');
const tasksControl = document.querySelector('.tasks__control');
const tasksInput = document.querySelector('.tasks__input');

function createElement() {
    const task = document.createElement('div');
    const title = document.createElement('div');
    const remove = document.createElement('a');
    
    task.classList.add('task');
    title.classList.add('task__title');
    remove.classList.add('task__remove');

    title.textContent = tasksInput.value;
    remove.href = '#0';
    remove.innerHTML = '&times';

    task.append(title);
    task.append(remove);
    tasksList.append(task);

    remove.addEventListener('click', () => {
        task.remove();
    });
}

document.querySelector('.tasks__add').addEventListener('click', (evt) => {
    evt.preventDefault();

    createElement();
    tasksControl.reset();
});