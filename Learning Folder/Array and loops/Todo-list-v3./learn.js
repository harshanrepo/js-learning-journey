let todoList = [{
    name:"make dinner",
    date:"2026-07-26"
    },

    {
    name:"Play games",
    date:"2026-07-26"
    }
];

const nameElem = document.querySelector('.getName');
const dateElem = document.querySelector('.getDate');
const Lists = document.querySelector('.todo-lists');

showLists()

function addList() {
    let nameValue = nameElem.value;
    let dateValue = dateElem.value;
    todoList.push({
        name:nameValue,
        date:dateValue
    });
    
    nameElem.value = ' ';
    showLists()
}


function showLists() {
    let todoListHtml = " ";
    for (let i = 0; i < todoList.length; i++) {
        const toddoObject = todoList[i];
        const {name,date}=toddoObject;
        const html = `
        <div>${name}</div> 
        <div>${date}</div> 
        <button onclick="deleteList(${i},1)" class="btn-del">Delete</button>
        `
        todoListHtml += html
        Lists.innerHTML = todoListHtml
    }
}


function addElem(event) {
    if (event.key === 'Enter') {
        addList()
    }
}


function deleteList(i,num){
    todoList.splice(i,num);
    showLists()
}