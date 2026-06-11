function manejarClicCarta(carta) {
    if (estadoGlobal.tableroBloqueado || carta.classList.contains('volteada')) return;

    if (estadoGlobal.modo === 'solitario' && estadoGlobal.movimientos === 0 && estadoGlobal.cartasVolteadas.length === 0 && estadoGlobal.tiempo === 0) {
        iniciarCronometro();
    }

    carta.classList.add('volteada');
    estadoGlobal.cartasVolteadas.push(carta);

    if (estadoGlobal.cartasVolteadas.length === 2) {
        estadoGlobal.movimientos++;
        estadoGlobal.tableroBloqueado = true;
        actualizarPanel();
        verificarPareja();
    }
}

function verificarPareja() {
    const [carta1, carta2] = estadoGlobal.cartasVolteadas;
    const esPareja = carta1.dataset.icono === carta2.dataset.icono;

    if (esPareja) {
        estadoGlobal.paresEncontrados++;
        estadoGlobal.aciertosConsecutivos++;
        estadoGlobal.jugadores[estadoGlobal.indiceJugadorActivo].puntaje++;
        
        carta1.classList.add('emparejada');
        carta2.classList.add('emparejada');
        
        verificarLogros();
        reiniciarEstadoTurno();
        verificarVictoria();
    } else {
        estadoGlobal.aciertosConsecutivos = 0;
        carta1.classList.add('error');
        carta2.classList.add('error');
        
        setTimeout(() => {
            carta1.classList.remove('volteada', 'error');
            carta2.classList.remove('volteada', 'error');
            cambiarTurno();
            reiniciarEstadoTurno();
        }, 1000);
    }
}

function reiniciarEstadoTurno() {
    estadoGlobal.cartasVolteadas = [];
    estadoGlobal.tableroBloqueado = false;
    actualizarPanel();
}