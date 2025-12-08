🇫🇷 INTÉGRATION WEB : 

Ce dépôt contient l'intégration HTML, CSS et JavaScript d'une maquette .

Le code est conçu pour être Vanilla (sans framework CSS ou JS lourd) afin d'assurer une performance et une flexibilité maximales lors de la conversion ultérieure en thème WordPress.

🎯 Objectifs Principaux

Intégration Pure : Utilisation exclusive de HTML, CSS et JS.

Design Responsive : Adaptation fluide sur Desktop, Tablette et Mobile.

Interactivité : Mise en œuvre de la navigation à volet coulissant (sliding panel).

SEO & Accessibilité : Utilisation de balises sémantiques et de structure optimisée.

📂 Structure du Projet

cabinet-avocats-integration/
├── index.html          # Structure principale (sémantique, SEO)
├── style.css           # Styles complets (desktop + media queries)
├── script.js           # Gestion de l'interactivité des menus
└── assets/
    └── photo.jpg       # Image Hero


✨ Fonctionnalités Clés

1. Navigation Interactive (Volet Coulissant)

Le menu de gauche (.nav-list) déclenche l'ouverture du volet de droite (.right-panel).

Ouverture/Fermeture : Gérée via le script script.js qui ajoute/retire la classe .open au volet et la classe .active au bouton cliqué.

Mode Responsive :

Sur Desktop/Tablette : Le volet s'ouvre en largeur sur la droite.

Sur Mobile (< 768px) : Le volet s'ouvre en hauteur, à partir du bas de l'écran (80% de 80vh), pour garantir une bonne lisibilité sur les petits écrans.

2. Design et Responsive

L'intégralité du design, y compris les effets de survol (:hover) et les icônes (flèches, plus/moins), est réalisée en CSS pur.

Breakpoints CSS :

@media (max-width: 1200px) : Optimisation pour tablettes.

@media (max-width: 768px) : Optimisation pour mobiles (changement de disposition en colonne pour le contenu et le pied de page).

Pied de Page (.main-footer) : Le pied de page est entièrement réorganisé en mode colonne sur mobile pour maintenir la clarté de l'information (adresse, contact, newsletter).

3. Optimisation pour WordPress

L'intégration a été pensée pour faciliter la transition vers un thème WordPress :

Isolation Logique : Le code est segmenté logiquement : le contenu principal (dans index.html) peut être inséré dans page.php ou single.php, le <header> dans header.php, et le pied de page (.main-footer) dans footer.php.

Classes Claires : Les classes CSS sont descriptives et modulaires pour éviter les conflits avec des styles WordPress existants.
