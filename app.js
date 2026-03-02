function addtodo() {
    // récupérer la valeur
    const input = document.getElementById('todo-input');
    const todoText = input.value.trim();

    // si le champ est vide, ne rien faire
    if (todoText === "") return;

    // récupérer la liste
    const todoList = document.getElementById('todo-list');

    // créer une nouvelle tâche
    const li = document.createElement('li');
    li.textContent = todoText;

    // créer le bouton supprimer
    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-btn");
    deleteBtn.textContent = "supprimer";

    // ajouter l'événement pour supprimer le li
    deleteBtn.addEventListener("click", function() {
        li.remove(); // supprime correctement le li
    });

    // ajouter le bouton au li
    li.appendChild(deleteBtn);

    // ajouter le li à la liste
    todoList.appendChild(li);

    // réinitialiser l'input
    input.value = "";
}