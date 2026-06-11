const estadoGlobal = {
    modo: 'solitario',
    dificultad: 16,
    tematica: 'animales',
    jugadores: [{ nombre: 'Jugador 1', puntaje: 0 }],
    indiceJugadorActivo: 0,
    movimientos: 0,
    paresEncontrados: 0,
    tiempo: 0,
    intervaloCronometro: null,
    cartasVolteadas: [],
    tableroBloqueado: false,
    logrosDesbloqueados: [],
    aciertosConsecutivos: 0
};