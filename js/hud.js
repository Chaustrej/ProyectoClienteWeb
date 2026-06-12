function actualizarPanel() {
    const divJugadores = document.getElementById('panel-jugadores');
    const divTiempo = document.getElementById('panel-tiempo');
    const divMovimientos = document.getElementById('panel-movimientos');
    if (estadoGlobal.modo === 'pvp') {
        divJugadores.innerHTML = `
            <span class="${estadoGlobal.indiceJugadorActivo === 0 ? 'jugador-activo' : ''}">${estadoGlobal.jugadores[0].nombre}: ${estadoGlobal.jugadores[0].puntaje}</span> | 
            <span class="${estadoGlobal.indiceJugadorActivo === 1 ? 'jugador-activo' : ''}">${estadoGlobal.jugadores[1].nombre}: ${estadoGlobal.jugadores[1].puntaje}</span>
        `;
        divTiempo.style.display = 'none';
    } 
    else {
        divJugadores.innerHTML = `<span>${estadoGlobal.jugadores[0].nombre} (Pares: ${estadoGlobal.paresEncontrados})</span>`;
        divTiempo.style.display = estadoGlobal.modo === 'solitario' ? 'block' : 'none';
        divTiempo.textContent = `Tiempo: ${formatearTiempo(estadoGlobal.tiempo)}`;
    }
    
    divMovimientos.textContent = `Movimientos: ${estadoGlobal.movimientos}`;
}