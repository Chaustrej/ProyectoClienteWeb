const listaLogros = {
    primerPaso: { nombre: 'Primer Paso', desc: 'Encontrar el primer par.', condicion: () => estadoGlobal.paresEncontrados === 1 },
    rachaCaliente: { nombre: 'Racha Caliente', desc: '3 pares seguidos.', condicion: () => estadoGlobal.aciertosConsecutivos === 3 },
    velocista: { nombre: 'Velocista', desc: 'Fácil en < 30s.', condicion: () => estadoGlobal.dificultad === 16 && estadoGlobal.paresEncontrados === 8 && estadoGlobal.tiempo < 30 },
    sinTitubeos: { nombre: 'Sin Titubeos', desc: 'Par al primer intento.', condicion: () => estadoGlobal.movimientos === 1 && estadoGlobal.paresEncontrados === 1 }
};

function verificarLogros() {
    for (const clave in listaLogros) {
        const logro = listaLogros[clave];
        if (!estadoGlobal.logrosDesbloqueados.includes(logro.nombre) && logro.condicion()) {
            estadoGlobal.logrosDesbloqueados.push(logro.nombre);
            mostrarNotificacion(`🏆 Logro Desbloqueado: ${logro.nombre} - ${logro.desc}`);
        }
    }
}

function mostrarNotificacion(mensaje) {
    const contenedor = document.getElementById('notificaciones');
    const alerta = document.createElement('div');
    alerta.className = 'alerta-logro';
    alerta.textContent = mensaje;
    contenedor.appendChild(alerta);
    setTimeout(() => alerta.remove(), 3500); 
}