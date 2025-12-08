#  Intégration Web Haute Performance


> **Intégration HTML/CSS/JS Vanilla** d’une maquette moderne et élégante  
> Prête à être convertie en thème WordPress sur-mesure

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)](https://developer.mozilla.org/fr/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)](https://developer.mozilla.org/fr/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)](https://developer.mozilla.org/fr/docs/Web/JavaScript)
[![Responsive](https://img.shields.io/badge/Responsive-✓-success?style=flat)](#)
[![SEO Friendly](https://img.shields.io/badge/SEO-Friendly-brightgreen)](#)
[![WCAG Ready](https://img.shields.io/badge/Accessibilité-WCAG%202.1-blue)](#)

## 🎯 Objectifs du projet

- Intégration **100% Vanilla** (aucun framework CSS/JS lourd type Bootstrap ou Alpine.js)
- Performance optimale et chargement ultra-rapide
- Design **entièrement responsive** (Desktop → Tablette → Mobile)
- Navigation innovante avec **volet coulissant latéral** (desktop) → **bottom sheet** (mobile)
- Code structuré et commenté pour une conversion fluide en **thème WordPress**

## ✨ Fonctionnalités clés

### 1. Navigation à volet coulissant intelligent

- Clique sur un item du menu de gauche → ouverture fluide du panneau de droite
- Gestion parfaite de l’état actif (classe `.active` sur le lien)
- **Adaptation automatique au device** :
  - **Desktop & Tablette** : panneau latéral fixe (largeur 50% → 100% selon écran)
  - **Mobile (< 768px)** : panneau qui monte depuis le bas (`80vh`, `border-radius` en haut)

### 2. Responsive Design avancé

| Breakpoint         | Adaptations principales                                      |
|-------------------|---------------------------------------------------------------|
| `≤ 1200px`         | Passage en layout tablette, ajustement des marges et typographies |
| `≤ 768px`          | Tout en colonne, menu burger, contenu en colonne unique, footer réorganisé |
| `≤ 480px`          | Optimisations extrêmes pour très petits écrans                |

### 3. Prêt pour WordPress

Le code est découpé de façon logique pour une intégration directe :

| Fichier HTML       | Destination WordPress |
|----------------------------|-----------------------------------|
| `<header>` + menu          | `header.php`                      |
| Contenu principal          | `page.php`, `front-page.php` ou `template-parts/content.php` |
| Pied de page               | `footer.php`                      |
| Styles                     | `style.css` du thème + files queued |
| Scripts                    | enqueued dans `functions.php`     |

Classes CSS **descriptives et modulaires** (BEM-like) → zéro conflit avec Gutenberg ou plugins.

## 📂 Structure du projet
cabinet-avocats-integration/

├── index.html          # Page complète, sémantique et SEO-friendly

├── style.css           # Tous les styles (desktop-first + media queries)

├── script.js           # Gestion du panneau coulissant et interactions

└── assets/

└── photo.jpg       
## 🛠️ Comment tester localement

```bash
# 1. Clone le dépôt
git clone [https://github.com/yosradab/integration.git]

# 2. Ouvre simplement index.html dans ton navigateur
open index.html   # macOS
start index.html   # Windows
xdg-open index.html # Linux
👨‍💻 Auteur
Yosra Dab – Développeuse Front-end & Intégrateur WordPress
