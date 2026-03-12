// app.js

// Importer les fonctions du module storage
import { getTasks, saveTasks, deleteTask } from './storage.js';

// Importer la fonction pour récupérer les suggestions API
import { loadSuggestions } from './api.js';

// Sélectionner les éléments HTML
const addtodo = document.querySelector("#todo-input"); 
const addBtn = document.querySelector("#btn"); 
const todoList = document.querySelector("#todo-list");

// Récupérer les tâches sauvegardées dans le localStorage
let tasks = getTasks();

// Afficher les tâches existantes au chargement de la page
tasks.forEach(text => addTaskToDOM(text));

// Événement quand l'utilisateur clique sur "Ajouter"
addBtn.addEventListener("click", function() {

    // Récupérer le texte du champ input
    const texte = addtodo.value.trim();

    // Si le champ est vide on ne fait rien
    if (texte === "") return;

    // Ajouter la tâche dans le tableau
    tasks.push(texte);

    // Sauvegarder les tâches dans le localStorage
    saveTasks(tasks);

    // Ajouter la tâche dans la liste HTML
    addTaskToDOM(texte);

    // Vider le champ input
    addtodo.value = "";
});

// Fonction qui ajoute une tâche dans le DOM
function addTaskToDOM(texte) {

    // Créer un élément <li>
    let li = document.createElement("li");
    li.textContent = texte;

    // Créer le bouton supprimer
    let btnDelete = document.createElement("button");
    btnDelete.classList.add("delete-btn");
    btnDelete.textContent = "supprimer";

    // Événement pour supprimer la tâche
    btnDelete.addEventListener("click", () => {

        // Supprimer l'élément dans le DOM
        li.remove();

        // Trouver l'index de la tâche dans le tableau
        const index = tasks.indexOf(texte);

        // Si la tâche existe dans le tableau
        if (index > -1) {

            // Supprimer la tâche du tableau et du localStorage
            deleteTask(tasks, index);
        }
    });

    // Ajouter le bouton dans le li
    li.appendChild(btnDelete);

    // Ajouter la tâche dans la liste
    todoList.appendChild(li);
}

// Charger les suggestions de tâches depuis l'API
loadSuggestions(todoList);