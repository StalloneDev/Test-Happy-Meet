# Formation Dashboard

Un tableau de bord moderne développé avec Angular et Tailwind CSS pour la gestion et le suivi des formations.

## Prérequis

- Node.js (version 14.x ou supérieure)
- npm (généralement installé avec Node.js)
- Angular CLI (`npm install -g @angular/cli`)

## Installation

1. Clonez le dépôt :
```bash
git clone https://github.com/StalloneDev/Test-Happy-Meet.git
```

2. Accédez au répertoire du projet :
```bash
cd Test-Happy-Meet
```

3. Installez les dépendances :
```bash
npm install
```

## Lancement du projet

Pour démarrer le serveur de développement :

```bash
ng serve
```

Ouvrez votre navigateur et accédez à `http://localhost:4200/`. L'application se rechargera automatiquement si vous modifiez l'un des fichiers sources.

## Fonctionnalités

- Dashboard interactif avec statistiques de formation
- Affichage des taux de formation et de supervision
- Barre latérale rétractable
- Interface responsive
- Design moderne avec Tailwind CSS

## Technologies utilisées

- Angular 16
- Tailwind CSS
- PrimeNG
- TypeScript

## Structure du projet

- `src/app/dashboard` : Composant principal du tableau de bord
- `src/app/sidebar` : Composant de la barre latérale
- `src/app/services` : Services de l'application
- `src/assets` : Ressources statiques (images, etc.)

## Build

Pour construire le projet :

```bash
ng build
```

Les fichiers de build seront stockés dans le répertoire `dist/`.
