/*function showTodo(todo) {
    console.log(todo.title + ': ' + todo.text);
}
let myTodo = {
    title: 'Titulo tarefa',
    text: 'texto tarefa'
};
showTodo(myTodo);
*/

interface Todo{
    title: string;
    text: string;
}

function showTodo(todo: Todo) {
    console.log(todo.title + ': ' + todo.text);
}

myTodo = {
    title: 'Titulo tarefa',
    text: 'texto tarefa'
};

showTodo(myTodo);