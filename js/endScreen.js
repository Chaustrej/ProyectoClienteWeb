function verificarVictoria() {
    if (estadoGlobal.paresEncontrados === estadoGlobal.dificultad / 2) {
        detenerCronometro();
        setTimeout(mostrarPantallaFin, 500); 
    }
}

function mostrarPantallaFin() {
    document.getElementById('pantalla-juego').classList.add('oculto');
    const pantallaFin = document.getElementById('pantalla-fin');
    pantallaFin.classList.remove('oculto');

    const divEstadisticas = document.getElementById('estadisticas-fin');
    const divLogros = document.getElementById('logros-fin');
    
    let htmlStats = `<p>Movimientos totales: ${estadoGlobal.movimientos}</p>`;
    htmlStats += `<p>Pares encontrados: ${estadoGlobal.paresEncontrados}</p>`;
    const precision = estadoGlobal.movimientos > 0 ? Math.round((estadoGlobal.paresEncontrados / estadoGlobal.movimientos) * 100) : 0;
    htmlStats += `<p>Precisión: ${precision}%</p>`;

    if (estadoGlobal.modo === 'solitario') {
        htmlStats += `<p>Tiempo total: ${formatearTiempo(estadoGlobal.tiempo)}</p>`;
    } else if (estadoGlobal.modo === 'pvp') {
        const j1 = estadoGlobal.jugadores[0];
        const j2 = estadoGlobal.jugadores[1];
        htmlStats += `<h3>Resultados:</h3><p>${j1.nombre}: ${j1.puntaje} | ${j2.nombre}: ${j2.puntaje}</p>`;
        if (j1.puntaje > j2.puntaje) htmlStats += `<h3>🏆 ¡Gana ${j1.nombre}!</h3>`;
        else if (j2.puntaje > j1.puntaje) htmlStats += `<h3>🏆 ¡Gana ${j2.nombre}!</h3>`;
        else htmlStats += `<h3>🤝 ¡Empate!</h3>`;
    }

    divEstadisticas.innerHTML = htmlStats;

    divLogros.innerHTML = '<h3>Logros en esta sesión:</h3>';
    if (estadoGlobal.logrosDesbloqueados.length > 0) {
        divLogros.innerHTML += `<ul>${estadoGlobal.logrosDesbloqueados.map(logro => `<li>🌟 ${logro}</li>`).join('')}</ul>`;
    } else {
        divLogros.innerHTML += '<p>Ninguno. ¡Sigue intentándolo!</p>';
    }
}