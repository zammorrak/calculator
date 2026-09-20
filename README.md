# Calculatrice Responsive & Moderne (Next.js)

Une application de calculatrice moderne, responsive et interactive développée avec **Next.js**, **TypeScript** et **Tailwind CSS**. Elle intègre la gestion du clavier physique, un historique des calculs récents et une interface élégante de style sombre.

---

## Fonctionnalités principales

- **Opérations arithmétiques de base** : Addition, soustraction, multiplication, division, pourcentages et gestion du signe (`+/-`).
- **Historique des calculs** : Panneau rétractable pour consulter l'historique des calculs passés avec option de suppression.
- **Support complet du clavier** : Utilisation possible via le clavier physique (chiffres, opérateurs, effacement, touche Entrée pour calculer).
- **Design Responsive & Soigné** : Interface adaptative (mobile, tablette, desktop) basée sur Tailwind CSS avec des composants modulaires.

---

## Structure du Projet

Le projet suit une architecture propre et modulaire, séparant la logique des composants visuels :

```text
app/
├── components/
│   ├── Button.tsx         # Composant réutilisable pour les touches de la calculatrice
│   └── History.tsx        # Composant pour l'affichage et la gestion de l'historique
├── hooks/
│   └── useCalculatorKeyboard.ts # Hook personnalisé pour la gestion des touches du clavier
├── globals.css            # Styles globaux Tailwind CSS
├── layout.tsx             # Layout principal de l'application Next.js
└── page.tsx               # Composant principal (Page d'accueil de la calculatrice)
```

---

## Technologies Utilisées

- **[Next.js](https://next.js5.org/)** (App Router) - Framework React pour le rendu et la structure.
- **[TypeScript](https://www.typescriptlang.org/)** - Language de programmation basé sur JavaScript.
- **[Tailwind CSS](https://tailwindcss.com/)** - Framework CSS utility-first pour le design.
- **[Lucide React](https://lucide.dev/)** - Bibliothèque d'icônes vectorielles.

---

## Installation et Lancement

Suis ces étapes pour exécuter le projet en local sur ta machine :

1. **Cloner le dépôt ou ouvrir le dossier du projet** dans ton terminal.
2. **Installer les dépendances** :
   ```bash
   npm install
   ```
3. **Lancer le serveur de développement** :
   ```bash
   npm run dev
   ```
4. Ouvre ton navigateur à l'adresse [http://localhost:3000](http://localhost:3000).

---

## Architecture des Composants

### 1. `Button.tsx` (Composant de touche)
Isole tous les styles communs (padding, police, transition, effets d'appui) pour éviter la duplication de classes dans le code de la calculatrice :
```tsx
const baseButtonClass = "rounded-xl p-3 sm:p-5 md:p-6 text-sm sm:text-lg md:text-xl font-semibold transition active:scale-95";
```

### 2. `History.tsx` (Panneau d'historique)
Gère l'affichage sous forme de liste défilante des opérations précédentes, avec un bouton de nettoyage global utilisant une icône `Trash2`.

### 3. `useCalculatorKeyboard.ts` (Hook personnalisé)
Capture les événements du clavier de l'utilisateur pour mapper les touches de son clavier physique directement aux fonctions de la calculatrice.