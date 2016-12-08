

**Parcours numériques**
=======

Pré-requis
-------
Ci-dessous les éléments indispensables au bon fonctionnement du projet
 - *Git*
 - [*npm*](https://docs.npmjs.com/getting-started/installing-node)
 - *gulp*
 `npm install gulp -g`
 - [*phantomJS*](https://gist.github.com/rahularyan/ff4619c435f8bb94ef5b)

Structure
---------
Le projet se compose en 2 parties:
 - Une partie destinée à la navigation dans la plateforme accessible à la racine du projet, conçue ainsi pour améliorer le SEO sur ces pages
 - Une partie liseuse dans le répertoire /reader, conçue avec le framework [VueJs](https://vuejs.org)

Installation
------------
Cloner le projet

    git clone https://github.com/ecolehetic/UDM-Parcours-Numerique parcoursnumeriques

 Se placer dans le projet

    cd parcoursnumeriques

 Installer les dépendances

    npm install

Lancer les tâches gulp

    gulp js_app
    gulp sass
    gulp js_libs

  Se placer dans le répertoire de la liseuse

    cd reader

  Installer les dépendances

    npm install

 **IMPORTANT: Remplacer les url dans le index.html du répertoire de la liseuse**

Pour lancer le projet en mode dev

    npm run dev

Pour lancer le projet en production

    npm run build

Utilisation de la liseuse
-------------------------
En mode dev
http://localhost:8080/#!/livre/chapitre/0

En production
http://votreurl.com/reader/dist/#!/livre/chapitre/0
