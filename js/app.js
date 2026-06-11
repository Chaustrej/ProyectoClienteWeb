document.addEventListener('DOMContentLoaded', () => {
    aplicarTematica(estadoGlobal.tematica);
    document.getElementById('btn-iniciar').addEventListener('click', iniciarJuego);
    
    document.getElementById('btn-reiniciar').addEventListener('click', () => {
        detenerCronometro();
        document.getElementById('pantalla-juego').classList.add('oculto');
        document.getElementById('pantalla-configuracion').classList.remove('oculto');
    });

    document.getElementById('btn-jugar-nuevo').addEventListener('click', iniciarJuego);
    
    document.getElementById('btn-volver-menu').addEventListener('click', () => {
        document.getElementById('pantalla-fin').classList.add('oculto');
        document.getElementById('pantalla-configuracion').classList.remove('oculto');
    });

    document.getElementById('selector-modo').addEventListener('change', (evento) => {
        const inputJ2 = document.getElementById('nombre-jugador2');
        if (evento.target.value === 'pvp') {
            inputJ2.classList.remove('oculto');
        } else {
            inputJ2.classList.add('oculto');
        }
    });

    document.getElementById('selector-tematica').addEventListener('change', (evento) => {
        aplicarTematica(evento.target.value);
    });
});