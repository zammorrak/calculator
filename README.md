# Calculatrice Responsive & Moderne (Next.js)

Une application de calculatrice moderne, responsive et interactive développée avec **Next.js**, **TypeScript** et **Tailwind CSS**. Elle intègre la gestion du clavier physique, un historique des calculs récents et une interface élégante de style sombre.

🔗 **Démo en ligne :** [calculator-zam25.vercel.app](https://calculator-zam25.vercel.app?_vercel_share=jh9WjGRrxqc4Qr2mL7uRRCJYkPxiaFmO)

---

## Sommaire

- [Fonctionnalités principales](#fonctionnalités-principales)
- [Technologies utilisées](#technologies-utilisées)
- [Structure du projet](#structure-du-projet)
- [Installation et lancement](#installation-et-lancement)
- [Architecture des composants](#architecture-des-composants)
- [Scripts disponibles](#scripts-disponibles)

---

## Fonctionnalités principales

- **Opérations arithmétiques de base** : addition, soustraction, multiplication, division, pourcentages et gestion du signe (`+/-`).
- **Historique des calculs** : panneau rétractable pour consulter l'historique des calculs passés, avec option de suppression.
- **Support complet du clavier** : utilisation possible via le clavier physique (chiffres, opérateurs, effacement, touche Entrée pour calculer).
- **Design responsive & soigné** : interface adaptative (mobile, tablette, desktop) basée sur Tailwind CSS avec des composants modulaires.
- **Interface sombre élégante** : expérience visuelle moderne et agréable.
- **Convertisseur intégré** : bascule entre conversion de température (Celsius / Fahrenheit) et de devises (CAD / USD / EUR), avec conversion bidirectionnelle en temps réel.

---

## Technologies utilisées

| Technologie | Usage |
|---|---|
| [Next.js](https://nextjs.org/) (App Router) | Framework React pour le rendu et la structure |
| [TypeScript](https://www.typescriptlang.org/) | Typage statique pour un code plus robuste |
| [Tailwind CSS](https://tailwindcss.com/) | Framework CSS utility-first pour le design |
| [Lucide React](https://lucide.dev/) | Bibliothèque d'icônes vectorielles |
| [Vercel](https://vercel.com/) | Hébergement et déploiement continu |

---

## Structure du projet

Le projet suit une architecture propre et modulaire, séparant la logique des composants visuels :

```
app/
├── components/
│   ├── Button.tsx                # Composant réutilisable pour les touches de la calculatrice
│   ├── History.tsx               # Composant pour l'affichage et la gestion de l'historique
│   └── Converter.tsx             # Convertisseur de température et de devises
├── hooks/
│   └── useCalculatorKeyboard.ts  # Hook personnalisé pour la gestion des touches du clavier
├── globals.css                   # Styles globaux Tailwind CSS
├── layout.tsx                    # Layout principal de l'application Next.js
└── page.tsx                      # Composant principal (page d'accueil de la calculatrice)
public/                            # Assets statiques (icônes, images)
```

---

## Installation et lancement

Suis ces étapes pour exécuter le projet en local sur ta machine :

1. **Cloner le dépôt**

   ```bash
   git clone https://github.com/zammorrak/calculator.git
   cd calculator
   ```

2. **Installer les dépendances**

   ```bash
   npm install
   ```

3. **Lancer le serveur de développement**

   ```bash
   npm run dev
   ```

4. **Ouvrir l'application**

   Rends-toi sur [http://localhost:3000](http://localhost:3000) dans ton navigateur.

---

## Architecture des composants

### 1. `Button.tsx` — Composant de touche

Isole tous les styles communs (padding, police, transition, effets d'appui) pour éviter la duplication de classes dans le code de la calculatrice :

```ts
const baseButtonClass = "rounded-xl p-3 sm:p-5 md:p-6 text-sm sm:text-lg md:text-xl font-semibold transition active:scale-95";
```

### 2. `History.tsx` — Panneau d'historique

Gère l'affichage sous forme de liste défilante des opérations précédentes, avec un bouton de nettoyage global utilisant une icône `Trash2`.

### 3. `useCalculatorKeyboard.ts` — Hook personnalisé

Capture les événements du clavier de l'utilisateur pour mapper les touches physiques directement aux fonctions de la calculatrice (chiffres, opérateurs, `Enter`, `Backspace`, `Escape`, etc.).

### 4. `Converter.tsx` — Convertisseur

Composant à deux modes, sélectionnables via des onglets :

- **Température** : conversion bidirectionnelle Celsius ↔ Fahrenheit, mise à jour en temps réel à la saisie dans l'un ou l'autre champ.
- **Devises** : conversion bidirectionnelle entre CAD, USD et EUR à partir de taux de change fixes, avec mise à jour automatique des deux autres champs quel que soit celui modifié.

---

## Scripts disponibles

| Commande | Description |
|---|---|
| `npm run dev` | Lance le serveur de développement |
| `npm run build` | Compile l'application pour la production |
| `npm run start` | Démarre l'application en mode production |
| `npm run lint` | Vérifie la qualité du code avec ESLint |
