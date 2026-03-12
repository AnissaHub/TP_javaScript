// api.js
// Module pour récupérer des suggestions de tâches depuis l'API JSONPlaceholder

export async function loadSuggestions(todoList) {
    
    try {

        // 1. Appel à l'API pour récupérer 5 tâches
        const response = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=5");

        // 2. Transformer la réponse en format JSON
        const data = await response.json();

        // 3. Parcourir chaque tâche reçue
        data.forEach(todo => {

            // créer un élément li
            let li = document.createElement("li");
            li.textContent = todo.title;

            // ajouter le li dans la liste
            todoList.appendChild(li);
        });

    } catch (error) {

        // Gestion des erreurs si l'API ne répond pas
        console.error("Erreur lors du chargement des suggestions :", error);

        let li = document.createElement("li");
        li.textContent = "Impossible de charger les suggestions";

        todoList.appendChild(li);
    }
}