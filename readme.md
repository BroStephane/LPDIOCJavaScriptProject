# Projet Weka - Quoifeur

## Présentation de l'application
Ce projet vise à réaliser une application web permettant de prendre des rendez-vous pour des coiffeurs. Son nom est quoifeur. Des clients pourront prendre un rendez-vous avec un prestataire. Les prestataires pourront indiquer leurs disponibilités. Le tout sera affiché dans un calendrier.

## L'organisation de l'équipe
L'équipe est composée de :
- Habib Erfani
- Baptiste Hainaut
- Stéphane Hilaricus
- Chloé Provence

## Présentation des outils utilisés
- IDE : WebStorm & Visual Studio Code
- Packages :

**Front**
```json
"@fullcalendar/daygrid": "^6.1.5"
"@fullcalendar/react": "^6.1.5"
"@testing-library/jest-dom": "^5.16.5"
"@testing-library/react": "^13.4.0"
"@testing-library/user-event": "^13.5.0"
"axios": "^1.3.4"
"bootstrap": "^5.2.3"
"react": "^18.2.0"
"react-bootstrap": "^2.7.2"
"react-cookie": "^4.1.1"
"react-dom": "^18.2.0"
"react-router-dom": "^6.10.0"
"react-scripts": "5.0.1"
"switch": "^0.0.0"
"web-vitals": "^2.1.4"
"webpack": "^5.77.0"
```
**Back**
```json
"bcrypt": "^5.1.0"
"body-parser": "^1.20.1"
"cors": "^2.8.5"
"express": "^4.18.2"
"jsonwebtoken": "^9.0.0"
"node": "^19.6.1"
"nodemon": "^2.0.20"
"passport": "^0.6.0"
"passport-jwt": "^4.0.1"
"sqlite3": "^5.1.6"
```
## Gestion de projet
Lors de notre projet, nous avons utilisé Trello comme outil de gestion de ticket pour suivre les tâches à effectuer et leur état d'avancement. Trello est un outil de gestion de projet en ligne qui permet de créer des tableaux pour organiser les tâches et les projets en cours. Il est facile à utiliser et permet de collaborer avec d'autres membres de l'équipe. Nous avions les colonnes A faire, En cours, A review et Terminé. Chaque ticket portait un numéro, ce qui nous permet lors des merge request de facilement voir de quelle fonctionnalité on parle. Nous avons essayé de nous rapproche de la méthode Scrum.

Nous avons également utilisé Discord pour la communication entre les membres de l'équipe. Discord est une application de communication vocale et textuelle qui permet aux utilisateurs de discuter en temps réel avec d'autres personnes. Il est facile à utiliser et permet une communication rapide et efficace entre les membres de l'équipe.

Gitlab a été utilisé comme logiciel de forge pour stocker et gérer le code source du projet. Gitlab est une plateforme de développement logiciel qui permet aux développeurs de stocker et de gérer leur code source en ligne. Il est facile à utiliser et permet une collaboration efficace entre les membres de l'équipe.

Enfin, nous avons utilisé Webstorm et VSCode pour coder. Webstorm est un environnement de développement intégré (IDE) pour JavaScript qui permet aux développeurs de coder plus rapidement et plus efficacement. VSCode est un éditeur de code open-source ayant des fonctionnalités similaires grâce aux extensions.



**Rôles**

Baptiste Hainaut et Chloé Provence se sont plutôt occupés de la partie front-end.
Habib Erfani et Stéphane Hilaricus se sont plutôt occupés de la partie back-end.

## Application
**Les fonctionnalités obligatoires**

| Nom de la fonction                                               | Fonctionne totalement | Fonctionne partiellement | Ne fonctionne pas | Non fait | Développeur(s)                        |
|------------------------------------------------------------------|-----------------------|--------------------------|-------------------|----------|---------------------------------------|
| Page d'accueil                                                   | ✔️                    | ❌                        | ❌                 | ❌        | Baptiste Hainaut <br> Chloé Provence  |
| Formulaire de création prestataire                               | ✔️                    | ❌                        | ❌                 | ❌        | Habib Erfani                          |
| Définition/modification d'un calendrier hebdomadaire prestataire | ❌                     | ✔️                       | ❌                 | ❌        | Habib Erfani                          |
| Affichage des créneaux d'une période précise prestataire         | ✔️                    | ❌                        | ❌                 | ❌        | Habib Erfani <br/> Stéphane Hilaricus |
| Formulaire de création client                                    | ✔️                    | ❌                        | ❌                 | ❌        | Stéphane Hilaricus                    |
| Recherche de prestataire pour le client                          | ❌                     | ✔️                       | ❌                 | ❌        | Habib Erfani <br/> Baptiste Hainaut   |
| Affichage des créneaux d'un prestataire pour un client           | ✔️                    | ❌                        | ❌                 | ❌        | Baptiste Hainaut <br/> Chloé Provence |
| Réservation/annulation d'un créneau                              | ❌                     | ✔️                       | ❌                 | ❌        | Habib Erfani <br/> Stéphane Hilaricus |
| Tests                                                            | ❌                     | ❌                        | ❌                 | ✔️       | ❌                                     |

**Les fonctionnalités supplémentaires**

| Nom de la fonction | Fonctionne totalement | Fonctionne partiellement | Ne fonctionne pas | Non fait | Développeur(s) |
|--------------------|-----------------------|--------------------------|-------------------|----------|----------------|
| ❌                  | ❌                     | ❌                        | ❌                 | ❌        | ❌              |

## Lancer le site
**Front**

Placer vous dans le dossier front : `cd front`

Installer le projet front-end : `npm install`

Lancer le projet front-end : `npm start`

**Back**

Placer vous dans le dossier back : `cd back`

Installer le projet back-end : `npm install`

Lancer le projet back-end : `npm start`

Vous pouvez réinitialiser la base de données : `npm run resetDB`

## Rétrospective

Lors de notre projet de cours, nous avons développé une application qui nous a permis de mettre en pratique tout ce que nous avons appris en gestion de projet ainsi que lors de nos TP et TD de JavaScript, ReactJS et ExpressJS. Nous avons commencé par définir les besoins de notre application en équipe, en tenant compte des différentes contraintes et en essayant de respecter les délais impartis. Nous avons ensuite mis en place une méthodologie de travail en répartissant les tâches entre chaque membre de l'équipe en fonction de ses compétences et de ses disponibilités.

Nous avons utilisé les différentes compétences acquises lors de nos TP et TD pour concevoir et développer notre application. Nous avons ainsi utilisé ReactJS pour créer une interface utilisateur réactive et dynamique, avec des composants modulaires et réutilisables. Nous avons également utilisé ExpressJS pour mettre en place une API, qui permet de communiquer avec notre base de données SQLite.

Notre équipe avait plusieurs forces qui ont été très utiles dans la réussite de notre projet. Tout d'abord, nous avions une bonne communication et une collaboration efficace. Nous avons également été en mesure de bien répartir les tâches en fonction des compétences et des disponibilités de chacun, ce qui nous a permis de progresser rapidement tout au long du projet. De plus, nous avons fait preuve d'une grande flexibilité pour nous adapter aux différentes contraintes.

Malgré nos forces, nous avons également rencontré certaines difficultés tout au long du projet. Nous avons également été confrontés à des problèmes de compréhension lorsque nous avons travaillé sur des parties plus complexes de l'application.

Si nous avions à refaire ce projet, nous pourrions améliorer certaines parties de notre méthode de travail. Nous pourrions améliorer notre communication pour éviter les malentendus et les erreurs.

Tout au long du développement de notre application, nous avons travaillé en équipe, en utilisant des outils collaboratifs tels que Git et GitLab pour gérer les versions du code et pour faciliter les échanges entre les différents membres de l'équipe.

Pour finir, ce projet de cours nous a permis de mettre en pratique toutes les compétences que nous avons acquises au cours de notre formation et des TD/TP. Nous avons pu travailler en équipe, gérer un projet, et développer une application en utilisant les technologies les plus récentes. Cette expérience nous a permis de nous préparer pour notre future carrière professionnelle.