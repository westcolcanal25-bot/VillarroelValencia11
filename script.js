document.addEventListener('DOMContentLoaded', () => {
    // 1. Obtener los elementos por su ID
    const menuToggle = document.getElementById('menu-toggle');
    const mainNav = document.getElementById('main-nav');

    // 2. Escuchar el evento 'click' en el botón
    menuToggle.addEventListener('click', () => {
        // 3. Agregar o quitar la clase 'active' para mostrar/ocultar el menú
        mainNav.classList.toggle('active');
        
        // (Opcional) Agregar la clase 'open' al botón para cambiar el icono (ej. hamburguesa a 'X')
        menuToggle.classList.toggle('open'); 
    });
});

