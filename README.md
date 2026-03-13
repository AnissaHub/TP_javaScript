# Projet Javascript: Développement d'une Application Web de Gestion de Tâches

## Description
Cette application est une **Todo List** réalisée en JavaScript.  
Elle permet de :
- Ajouter des tâches
- Supprimer des tâches
- Sauvegarder les tâches dans le **localStorage** pour les garder après le rechargement
- Afficher des **suggestions de tâches** depuis une API externe (JSONPlaceholder).

L'application utilise :  
- Un **tableau `tasks`** en mémoire pour stocker les tâches pendant l'exécution  
- Le **localStorage** pour garder les tâches après un rechargement  
- Le **DOM** pour afficher les tâches dans la page

---

## Exécution locale
Pour exécuter le projet sur votre ordinateur :

1. **Cloner le projet** ou télécharger le dossier (exemple avec Git) :  
   `git clone <url-du-projet>`

2. **Ouvrir le dossier du projet** dans votre explorateur de fichiers ou dans VS Code.

3. **Lancer l'application** :  
   - Ouvrir le fichier **index.html** dans un navigateur (Chrome, Firefox, Edge)  
   - Ou utiliser **Live Server** (extension VS Code) pour éviter les erreurs CORS lors des appels à l’API

4. Une fois l'application lancée, vous pouvez :  
   - **Ajouter** de nouvelles tâches  
   - **Supprimer** des tâches  
   - **Voir les suggestions de tâches** récupérées depuis l’API

---

## Fonctionnalités principales
- **Ajouter une tâche** depuis le champ input  
- **Supprimer une tâche** via le bouton "supprimer"  
- **Sauvegarde automatique** des tâches dans le localStorage  
- **Affichage automatique** des tâches sauvegardées au chargement de la page  
- **Suggestions de tâches** récupérées depuis l’API JSONPlaceholder  

---

## Problèmes connus et améliorations futures
- Les suggestions de tâches ne sont pas sauvegardées dans le localStorage  
- Les tâches pourraient être **modifiables** au lieu de seulement supprimer  
- Ajouter la possibilité de **marquer les tâches comme terminées**  
