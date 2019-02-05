function showTodo(todo: {title: string, text: string}){
    console.log(todo.title + ': ' + todo.text);
}

let myTodo = {
    title: 'Titulo tarefa',
    text: 'texto tarefa'
}

showTodo(myTodo);