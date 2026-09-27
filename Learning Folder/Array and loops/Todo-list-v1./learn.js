let todoList=[];

const inputElem=document.querySelector('.getValue');

function addList(){
    let value=inputElem.value;
    todoList.push(value);
    console.log(todoList);
    inputElem.value=' ';
}

function addElem(event){
    if (event.key==='Enter'){
        addList()
    }
}