document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle'); // El botón
    const navMenu = document.getElementById('main-nav'); // El menú

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function() {
            // CLAVE: Alterna la clase 'open' que activa el CSS de max-height
            navMenu.classList.toggle('open'); 

            // Gestión de accesibilidad
            const isExpanded = navMenu.classList.contains('open');
            menuToggle.setAttribute('aria-expanded', isExpanded);
        });

        // ... (El código para cerrar el menú al hacer clic en un enlace)
    }
});



