let todoList = [];
const nameElem = document.querySelector('.getName');
const dateElem = document.querySelector('.getDate');
const Lists = document.querySelector('.todo-lists');

nameElem.addEventListener('keydown', addElem);
document.querySelector(".addBtn").addEventListener("click",() =>{
    addList()
})


function addList() {
    let nameValue = nameElem.value;
    let dateValue = dateElem.value;
    todoList.push({ name: nameValue, date: dateValue });
    nameElem.value = '';
    showLists();
}

function showLists() {
    let todoListHtml = "";
    todoList.forEach( (todoObject, i)  => {
        const { name, date } = todoObject;
        const html = `
        <div>${name}</div>
        <div>${date}</div>
        <button onclick="deleteList(${i},1)" class="btn-del">Delete</button>
        `;
        todoListHtml += html;
    });
    Lists.innerHTML = todoListHtml;
}

function addElem(event) {
    if (event.key === 'Enter') {
        addList();
    }
}

function deleteList(i, num) {
    todoList.splice(i, num);
    showLists();
}   