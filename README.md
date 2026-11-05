# Intégration Web — Site d'un cabinet d'avocats (HTML / CSS / JS Vanilla)

Intégration **HTML, CSS et JavaScript vanilla** d'une maquette de site pour un cabinet d'avocats, sans framework. Le code est découpé pour être facilement converti en **thème WordPress** sur mesure.

## Objectifs

- Intégration **100 % vanilla** : pas de Bootstrap, pas de framework JS
- Chargement rapide et code léger
- Design **entièrement responsive** (desktop → tablette → mobile)
- Navigation originale à **volet coulissant**
- Code structuré et commenté pour une conversion simple en thème WordPress

## Fonctionnalités

### Navigation à volet coulissant
- Un clic sur un élément du menu de gauche ouvre le panneau de droite avec une transition fluide
- Gestion de l'état actif (classe `.active` sur le lien)
- Adaptation au support :
  - **Desktop et tablette** : panneau latéral fixe (50 % à 100 % de la largeur selon l'écran)
  - **Mobile (< 768 px)** : panneau qui monte depuis le bas (*bottom sheet*, `80vh`, coins arrondis)

### Responsive

| Breakpoint | Adaptations |
|---|---|
| `≤ 1200px` | Passage en mise en page tablette, ajustement des marges et de la typographie |
| `≤ 768px` | Contenu sur une colonne, menu burger, pied de page réorganisé |
| `≤ 480px` | Optimisations pour les très petits écrans |

### Prêt pour WordPress

| Partie HTML | Fichier WordPress |
|---|---|
| `<header>` + menu | `header.php` |
| Contenu principal | `page.php`, `front-page.php` ou `template-parts/content.php` |
| Pied de page | `footer.php` |
| Styles | `style.css` du thème |
| Scripts | chargés via `wp_enqueue_script` dans `functions.php` |

Les classes CSS sont descriptives et modulaires (proches de BEM), pour éviter les conflits avec Gutenberg et les plugins.

## Structure

```
integration/
├── index.html   # Page complète, sémantique et optimisée SEO
├── style.css    # Styles (desktop-first + media queries)
├── script.js    # Volet coulissant et interactions
└── photo.png    # Image de la maquette
```

## Tester en local

```bash
git clone https://github.com/yosradab/integration.git
cd integration
```

Puis ouvrir `index.html` dans un navigateur (aucune installation nécessaire).

## Auteur

**Yosra Dab** — Ingénieure logiciel Full Stack · [Portfolio](https://yosradab.vercel.app) · [GitHub](https://github.com/yosradab) · [LinkedIn](https://linkedin.com/in/yosradab)
