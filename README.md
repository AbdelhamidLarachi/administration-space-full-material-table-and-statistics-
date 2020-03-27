
## 1. Analyse des besoins  : 

Pour bien gérer notre application mobile, nous avons mis un portail local pour les administrateurs accessible via le nom d’admin et son mot de passe, une fois connecté, les administrateurs peuvent trier, modifier, ajouter, supprimer les appels d’offres et les avis de consultation, ainsi que la visualisation des statistiques. Une liste des différentes fonctions a donc été établie. Voici une liste de ces fonctionnalités:

###### •	Gestion d’appels d’offres et avis de consultation :

-	Modification 
-	Suppression
-	Suppression par sélection 
-	Tri par Type, Wilaya, Date, infructuosité.
-	Recherche sur table
-	Voir infructuosité
-	Voir Détails
-	pagination
-	Sélection de nombre d’offres par page
-	Exporter en format csv
-	Confirmation en cas de Surpression / Modification / Déconnexion

###### •	Statistiques : 
Les administrateurs peuvent visualiser : 
-	Total des utilisateurs
-	Nombre et pourcentage des utilisateurs qui ont remplis le formulaire de sondage
-	Nombres des vouchers utilisés
-	Nombres d’appels d’offres
-	Nombre et pourcentage des offres infructueux 
-	Nombres des avis de consultation

###### •	résultats de sondage :

-	Note moyenne de qualité de service 
-	Note moyenne d’avis sur le prix de voucher
-	Liste des suggestions des clients avec leurs date



## 2. Diagramme de classe :

![Diagramme de classe](https://github.com/AbdelhamidLarachi/rapid_sms/blob/master/clasDiagramJavaPNG.png?raw=true)

## 3. Choix des Technologies :

  ###### - ReactJS :
React est une bibliothèque JavaScript pour créer des interfaces utilisateur. Il est maintenu par Facebook et une communauté de développeurs et d'entreprises individuels. React peut être utilisé comme base dans le développement d'applications, il a été utilisé comme frontend de l’application d’administration.  
 
 ## 3. Choix des Modules :

 ###### •	Material-ui : 
est un ensemble très solide et stable des composants react qui non seulement sont beaux, mais aussi faciles à utiliser et à personnaliser. 

###### •	Axios : 
est une bibliothèque JavaScript fonctionnant comme un client HTTP. Elle permet de communiquer avec des API en utilisant des requêtes.

###### • React-router-dom : 
React Router est la bibliothèque de routage standard pour React. Qui maintient votre interface utilisateur en synchronisation avec l'URL. Il dispose d'une API simple avec des fonctionnalités puissantes telles que la correspondance dynamique des routes et la gestion des transitions des vues.

###### •	Prop_types : 
React fournit un mécanisme interne pour ajouter une vérification de type aux composants. Les composants React utilisent une propriété spéciale nommée propTypes pour configurer la vérification de type. Lorsque les accessoires sont passés à un composant React, ils sont vérifiés par rapport aux définitions de type configurées dans la propriété propTypes.

###### •	bcrypt : 
bcrypt is a password hashing, based on the Blowfish cipher. Besides incorporating a salt to protect against rainbow table attacks, bcrypt is an adaptive function: over time, the iteration count can be increased to make it slower, so it remains resistant to brute-force search attacks even with increasing computation power.
The bcrypt function is the default password hash algorithm for OpenBSD and other systems including some Linux distributions such as SUSE Linux. 
