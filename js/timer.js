
function iniciarCronometro() {
    
    if (estadoGlobal.modo !== 'solitario') return;
    
    estadoGlobal.tiempo = 0;
    clearInterval(estadoGlobal.intervaloCronometro);
    
   
    estadoGlobal.intervaloCronometro = setInterval(() => {
        estadoGlobal.tiempo++;
        actualizarPanel();
    }, 1000);
}

function detenerCronometro() {
    clearInterval(estadoGlobal.intervaloCronometro);
}


function formatearTiempo(segundosTotales) {
    const minutos = Math.floor(segundosTotales / 60).toString().padStart(2, '0');
    const segundos = (segundosTotales % 60).toString().padStart(2, '0');
    return `${minutos}:${segundos}`;
}