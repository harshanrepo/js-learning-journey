let todoList = [];
const inputElem = document.querySelector('.getValue');
const Lists = document.querySelector('.todo-lists');

showLists()

function addList() {
    let value = inputElem.value;
    todoList.push(value);
    inputElem.value = ' ';
    showLists()
}


function showLists() {
    let todoListHtml = " ";
    for (let i = 0; i < todoList.length; i++) {
        const list = todoList[i];
        const html = `<p>${list}</p>`
        todoListHtml += html
        Lists.innerHTML = todoListHtml
    }
}


function addElem(event) {
    if (event.key === 'Enter') {
        addList()
    }
}