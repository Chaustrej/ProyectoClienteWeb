function cambiarTurno() {
    if (estadoGlobal.modo === 'pvp') {
        estadoGlobal.indiceJugadorActivo = estadoGlobal.indiceJugadorActivo === 0 ? 1 : 0;
    }
}

function iniciarJuego() {
    estadoGlobal.modo = document.getElementById('selector-modo').value;
    estadoGlobal.dificultad = parseInt(document.getElementById('selector-dificultad').value);
    estadoGlobal.tematica = document.getElementById('selector-tematica').value;
    
    const nombreJ1 = document.getElementById('nombre-jugador1').value || 'Jugador 1';
    estadoGlobal.jugadores = [{ nombre: nombreJ1, puntaje: 0 }];
    
    if (estadoGlobal.modo === 'pvp') {
        const nombreJ2 = document.getElementById('nombre-jugador2').value || 'Jugador 2';
        estadoGlobal.jugadores.push({ nombre: nombreJ2, puntaje: 0 });
    }

    estadoGlobal.indiceJugadorActivo = 0;
    estadoGlobal.movimientos = 0;
    estadoGlobal.paresEncontrados = 0;
    estadoGlobal.tiempo = 0;
    estadoGlobal.aciertosConsecutivos = 0;
    estadoGlobal.logrosDesbloqueados = [];
    detenerCronometro();

    aplicarTematica(estadoGlobal.tematica);
    generarTablero();
    actualizarPanel();

    document.getElementById('pantalla-configuracion').classList.add('oculto');
    document.getElementById('pantalla-fin').classList.add('oculto');
    document.getElementById('pantalla-juego').classList.remove('oculto');
}