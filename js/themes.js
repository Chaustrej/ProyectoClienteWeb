const opcionesTematicas = {
    animales: {
        fondo: '#e8f5e9', primario: '#2e7d32', fondoCarta: '#4caf50', acento: '#ff9800',
        iconos: ['🐶','🐱','🐭','🐹','🐰','🦊','🐻','🐼','🐨','🐯','🦁','🐮','🐷','🐸','🐵','🐔','🐧','🐦','🐤','🦆','🦅','🦉','🦇','🐺','🐗','🐴','🦄','🐝','🐛','🦋','🐌','🐞']
    },
    espacio: {
        fondo: '#1a1a2e', primario: '#16213e', fondoCarta: '#0f3460', acento: '#e94560',
        
        iconos: ['🌍','🌎','🌏','🌕','🌖','🌗','🌘','🌑','🌒','🌓','🌔','🌙','🌚','🌛','🌜','☀️','🌝','🌞','⭐','🌟','🌠','🌌','🚀','🛸','🛰️','🪐','☄️','👨‍🚀','👩‍🚀','👽','👾','🔭']
    },
    frutas: {
        fondo: '#fff3e0', primario: '#e65100', fondoCarta: '#ff9800', acento: '#d84315',
        iconos: ['🍎','🍐','🍊','🍋','🍌','🍉','🍇','🍓','🍈','🍒','🍑','🥭','🍍','🥥','🥝','🍅','🥑','🍆','🥒','🥕','🌽','🌶️','🧄','🧅','🥔','🍠','🥐','🍞','🥖','🥨','🧀','🥚']
    }
};

function aplicarTematica(nombreTematica) {
    const tema = opcionesTematicas[nombreTematica];
    const raiz = document.documentElement;
    raiz.style.setProperty('--color-fondo', tema.fondo);
    raiz.style.setProperty('--color-primario', tema.primario);
    raiz.style.setProperty('--fondo-carta', tema.fondoCarta);
    raiz.style.setProperty('--color-acento', tema.acento);
}
