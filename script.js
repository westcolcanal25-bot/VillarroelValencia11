document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('main-nav');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function() {
            
            // CLAVE: Solo alternamos la clase 'open'
            navMenu.classList.toggle('open');
            
            // Gestión de accesibilidad
            const isExpanded = navMenu.classList.contains('open');
            menuToggle.setAttribute('aria-expanded', isExpanded);
        });
        
        // Cerrar el menú si se hace clic en un enlace
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('open');
                menuToggle.setAttribute('aria-expanded', false);
            });
        });
    }
});








