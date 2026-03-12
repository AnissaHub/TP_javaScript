// storage.js
// Fonction pour récupérer les tâches sauvegardées
export function getTasks() {

    // On récupère les données depuis localStorage
    // JSON.parse transforme le texte stocké en tableau JavaScript
    // Si aucune tâche n'existe, on retourne un tableau vide
    return JSON.parse(localStorage.getItem("tasks")) || [];
}


// Fonction pour sauvegarder toutes les tâches
export function saveTasks(tasks) {

    // localStorage ne peut stocker que du texte
    // JSON.stringify transforme le tableau en texte
    localStorage.setItem("tasks", JSON.stringify(tasks));
}


// Fonction pour supprimer une tâche
export function deleteTask(tasks, index) {

    // splice supprime un élément du tableau à la position donnée
    tasks.splice(index, 1);

    // Après la suppression, on met à jour le localStorage
    saveTasks(tasks);
}