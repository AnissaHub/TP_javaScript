export async function loadSuggestions(todoList) {

    try {

        const response = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=5");

        const data = await response.json();

        data.forEach(todo => {

            let li = document.createElement("li");
            li.textContent = todo.title;

            let btnDelete = document.createElement("button");
            btnDelete.classList.add("delete-btn");
            btnDelete.textContent = "supprimer";

            btnDelete.addEventListener("click", function () {
                li.remove();
            });

            li.appendChild(btnDelete);
            todoList.appendChild(li);
        });

    } catch (error) {

        console.error("Erreur lors du chargement des suggestions :", error);

        let li = document.createElement("li");
        li.textContent = "Impossible de charger les suggestions";

        todoList.appendChild(li);
    }
}