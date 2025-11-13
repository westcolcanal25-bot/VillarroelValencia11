document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('main-nav');
    const closeNavBtn = document.getElementById('close-nav-btn');

    // MÁXIMA DEPURACIÓN: Verifica si los elementos clave se encuentran
    console.log("Menú Toggle (Botón Hamburguesa):", menuToggle);
    console.log("Nav Menu (Menú Lateral):", navMenu);

    // Función para cerrar el menú
    function closeMenu() {
        if (navMenu) {
            navMenu.classList.remove('open');
            menuToggle.setAttribute('aria-expanded', false);
        }
    }

    // Inicialización del botón de menú
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function() {
            // Alternamos la clase 'open'
            navMenu.classList.toggle('open');
            
            // Gestión de accesibilidad
            const isExpanded = navMenu.classList.contains('open');
            menuToggle.setAttribute('aria-expanded', isExpanded);
        });
        
        // Inicialización del botón de cerrar 'X'
        if (closeNavBtn) {
            closeNavBtn.addEventListener('click', closeMenu);
        }

        // Cerrar el menú si se hace clic en un enlace
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', closeMenu);
        });

        // NOTA: Si ves "null" en la consola para "Menú Toggle", el problema es el HTML/ID.
    } else {
        console.error("ERROR: No se encontró el botón de menú (ID: menu-toggle) o el menú de navegación (ID: main-nav) en el HTML.");
    }
});
