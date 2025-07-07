# Projet Fil rouge De-Front Simplon Lens

Ce repo contient le front-end pour une brasserie fictive.

## Prérequis

- Linux, MacOS, Windows
- Bash
- Node 

## Installation

```
git clone https://github.com/sebastien-76/brasserie-front.git
cd brasserie-front
npm install
```

## Utilisation

Lancer le serveur web de développement :

```
npm run dev
```

Puis ouvrir la page suivante [http://localhost:5173/](http://localhost:5173/)

## Tests

Vitest a été installé pour effectuer des tests.

Pour lancer les tests :
```
npm run test
```

Deux tests sont effectués.
Le premier vérifie que le produit "fugiat" est bien récupéré de la base de données.
Le second vérifie que la recherche du terme "di" recupère les objets dont le nom contient "di".

## Utilisation outils analyse de performance

Résultat de l'analyse lighthouse : 
[résultat](https://github.com/sebastien-76/brasserie-front/tree/main/public/images/lighthouse.png)

Axe d'amélioration :
    - Ajout du label sur l'input de la recherche
    - Modification de la couleur de texte du footer
    - Ajout meta description

Il reste les performances à améliorer.

[résultat après amélioration](https://github.com/sebastien-76/brasserie-front/tree/main/public/images/lighthouse_ameliore.png)

