function generarTablero() {
    const tablero = document.getElementById('tablero');
    tablero.innerHTML = ''; 
    
    
    const columnas = Math.sqrt(estadoGlobal.dificultad);
    document.documentElement.style.setProperty('--columnas', columnas);

  
    const iconosTema = opcionesTematicas[estadoGlobal.tematica].iconos;
    const paresRequeridos = estadoGlobal.dificultad / 2;
    const iconosSeleccionados = iconosTema.slice(0, paresRequeridos);
    
    
    const mazoCartas = [...iconosSeleccionados, ...iconosSeleccionados].sort(() => Math.random() - 0.5);

   
    mazoCartas.forEach((icono, indice) => {
        const carta = document.createElement('div');
        carta.classList.add('carta');
        carta.dataset.icono = icono;

        const interior = document.createElement('div');
        interior.classList.add('carta-interior');

        const frente = document.createElement('div');
        frente.classList.add('carta-frente');
        
        const dorso = document.createElement('div');
        dorso.classList.add('carta-dorso');
        dorso.textContent = icono;

        interior.appendChild(frente);
        interior.appendChild(dorso);
        carta.appendChild(interior);

        
        carta.addEventListener('click', () => manejarClicCarta(carta));
        tablero.appendChild(carta);
    });
}