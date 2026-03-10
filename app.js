import { getTasks, saveTasks, deleteTask } from './storage.js';
import { loadSuggestions } from './api.js';

const addtodo = document.querySelector("#todo-input");
const addBtn = document.querySelector("#btn");
const todoList = document.querySelector("#todo-list");

let tasks = getTasks();

tasks.forEach(text => addTaskToDOM(text));

addBtn.addEventListener("click", () => {

    const texte = addtodo.value.trim();
    if (texte === "") return;

    tasks.push(texte);

    saveTasks(tasks);

    addTaskToDOM(texte);

    addtodo.value = "";
});

function addTaskToDOM(texte) {

    let li = document.createElement("li");
    li.textContent = texte;

    let btnDelete = document.createElement("button");
    btnDelete.classList.add("delete-btn");
    btnDelete.textContent = "supprimer";

    btnDelete.addEventListener("click", () => {

        li.remove();

        const index = tasks.indexOf(texte);

        if (index > -1) {
            deleteTask(tasks, index);
        }
    });

    li.appendChild(btnDelete);
    todoList.appendChild(li);
}

loadSuggestions(todoList);