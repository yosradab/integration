document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.nav-btn');
    const rightPanel = document.getElementById('rightPanel');
    const allContents = document.querySelectorAll('.panel-content');
    const closeIcons = document.querySelectorAll('.close-panel-icon'); // SÉLECTION DES ICONES DE FERMETURE

    /**
     * Fonction pour fermer le panneau de droite.
     * @param {HTMLElement} contentToHide - Le contenu actuellement actif dans le panneau.
     */
    function closePanel(contentToHide) {
        // Désactiver tous les boutons de navigation
        buttons.forEach(b => b.classList.remove('active'));
        
        // Fermer le panneau
        rightPanel.classList.remove('open');
        
        // Nettoyer l'affichage du contenu après l'animation de fermeture
        if (contentToHide) {
            // Utilise setTimeout pour cacher le contenu APRES la transition CSS de 0.5s
            setTimeout(() => {
                contentToHide.classList.remove('active-content');
            }, 500); 
        }
    }

    // --- LOGIQUE D'OUVERTURE PAR LES BOUTONS DE NAVIGATION ---
    buttons.forEach(btn => {
        btn.addEventListener('click', function() {
            const targetId = this.getAttribute('data-target');
            const targetContent = document.getElementById(targetId);

            // 1. GESTION DE L'ÉTAT ACTIF DU BOUTON
            // Si on clique sur un bouton déjà actif, on ferme le panneau
            if (this.classList.contains('active')) {
                closePanel(targetContent);
                return;
            }

            // Sinon (nouveau clic), on réinitialise les autres boutons
            buttons.forEach(b => b.classList.remove('active'));
            
            // On active le bouton actuel
            this.classList.add('active');

            // 2. GESTION DU CONTENU DU VOLET
            // On cache tous les contenus précédents
            allContents.forEach(c => c.classList.remove('active-content'));
            
            // On prépare le nouveau contenu à s'afficher
            if(targetContent) {
                targetContent.classList.add('active-content');
            }

            // 3. OUVERTURE DU VOLET
            // On s'assure que le panneau est ouvert
            rightPanel.classList.add('open');
        });
    });

    // --- NOUVELLE LOGIQUE : FERMETURE PAR L'ICÔNE 'X' ---
    closeIcons.forEach(icon => {
        icon.addEventListener('click', function() {
            // Remonte au parent .panel-content pour trouver le contenu actif
            const currentContent = this.closest('.panel-content');
            closePanel(currentContent);
        });
    });
});