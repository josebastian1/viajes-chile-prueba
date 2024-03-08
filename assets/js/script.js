$(function () {

    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

    var nav = document.querySelector('nav')
    console.log;

    window.addEventListener('scroll', function () {
        if (this.window.scrollY > 100) {
            nav.classList.add('bg-black', 'shadow');
        } else {
            nav.classList.remove('bg-black', 'shadow')
        }
    });

    document.getElementById('botonEnviar').addEventListener('click', function () {
        const nombre = document.getElementById('nombreForm').value;
        const correo = document.getElementById('correoForm').value;
        const mensaje = document.getElementById('mensajeForm').value;

        if (nombre.trim() !== '' && correo.trim() !== '' && mensaje.trim() !== '') {
            alert('Mensaje enviado!');
        } else {
            alert('Por favor, rellene todos los campos.');
        }
    });


})