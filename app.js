// Sélectionner les éléments du DOM
const addtodo = document.querySelector("#todo-input"); // champ input
const addBtn = document.querySelector("#btn"); // bouton ajouter
const todoList = document.querySelector("#todo-list"); // liste des tâches

 // Récupérer les tâches sauvegardées dans localStorage
 // Si aucune tâche n'existe encore, on initialise avec un tableau vide
 let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

 // Afficher les tâches déjà sauvegardées au chargement

 tasks.forEach(function(texte) {

    // créer un élément li
    let li = document.createElement("li");
    li.textContent = texte;

    // créer un bouton supprimer
    let btnDelete = document.createElement("button");
    btnDelete.classList.add("delete-btn");
    btnDelete.textContent = "supprimer";

    // comportement du bouton supprimer
    btnDelete.addEventListener("click", function(){
   // supprimer la tâche du DOMli.remove();

  // trouver la position de la tâche dans le tableau
     const index = tasks.indexOf(texte);

        // si la tâche existe dans le tableau
        if(index > -1){
            // la supprimer du tableau
            tasks.splice(index,1);

            // mettre à jour localStorage
            localStorage.setItem("tasks", JSON.stringify(tasks));
        }
    });

    // ajouter le bouton dans le li
    li.appendChild(btnDelete);

    // ajouter le li dans la liste
    todoList.appendChild(li);
})

   //Ajouter une nouvelle tâche

    addBtn.addEventListener('click', function(){

   // récupérer la valeur du champ input
   const texte = addtodo.value.trim();

   // si le champ est vide on ne fait rien
   if (texte === "") return;

   // créer un élément li
   let li = document.createElement("li");

   // ajouter le texte de la tâche
   li.textContent = texte;

   // créer le bouton supprimer
   let btnDelete = document.createElement("button");
   btnDelete.classList.add("delete-btn");
   btnDelete.textContent = "supprimer";

   // ajouter le comportement de suppression
   btnDelete.addEventListener('click', function(){

        // supprimer la tâche dans le DOM
        li.remove();

        // trouver l'index de la tâche dans le tableau
        const index = tasks.indexOf(texte);

        if (index > -1){
            // supprimer la tâche du tableau
            tasks.splice(index,1);

            // mettre à jour localStorage
            localStorage.setItem("tasks", JSON.stringify(tasks));
        }
        //localStorage = mémoire permanente du navigateur
       // setItem → sauvegarder
       // getItem → récupérer
      // JSON.stringify → transformer en texte
      // JSON.parse → retransformer en tableau

   });

   // ajouter le bouton dans le li
   li.appendChild(btnDelete);
                                   
   // ajouter la tâche dans la liste
   todoList.appendChild(li);

   // ajouter la tâche dans le tableau
   tasks.push(texte);

   // sauvegarder le tableau dans localStorage
   localStorage.setItem("tasks", JSON.stringify(tasks));

   // vider le champ input
   addtodo.value = "";
});