document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('main-nav');
    // NUEVA REFERENCIA: Botón de cerrar dentro del menú lateral
    const closeNavBtn = document.getElementById('close-nav-btn');

    // Función para cerrar el menú
    function closeMenu() {
        navMenu.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', false);
    }

    // Función para abrir/cerrar el menú
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function() {
            // Alternamos la clase 'open'
            navMenu.classList.toggle('open');
            
            // Gestión de accesibilidad
            const isExpanded = navMenu.classList.contains('open');
            menuToggle.setAttribute('aria-expanded', isExpanded);
        });
        
        // 1. Añadir el evento de cerrar al nuevo botón 'X'
        if (closeNavBtn) {
            closeNavBtn.addEventListener('click', closeMenu);
        }

        // 2. Cerrar el menú si se hace clic en un enlace (mantenemos tu lógica)
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', closeMenu);
        });
    }
});
