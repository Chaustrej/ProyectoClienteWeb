
const opcionesTematicas = {
    animales: {
        fondo: '#e8f5e9',     
        gradiente: '#a5d6a7',  
        primario: '#2e7d32', 
        fondoCarta: '#4caf50', 
        acento: '#ff9800',
        iconos: ['🐶','🐱','🐭','🐹','🐰','🦊','🐻','🐼','🐨','🐯','🦁','🐮','🐷','🐸','🐵','🐔','🐧','🐦','🐤','🦆','🦅','🦉','🦇','🐺','🐗','🐴','🦄','🐝','🐛','🦋','🐌','🐞']
    },
    espacio: {
        fondo: '#0f172a',     
        gradiente: '#1e1b4b', 
        primario: '#f1f5f9', 
        fondoCarta: '#1e293b', 
        acento: '#f43f5e',
        iconos: ['🌍','🌎','🌏','🌕','🌖','🌗','🌘','🌑','🌒','🌓','🌔','🌙','🌚','🌛','🌜','☀️','🌝','🌞','⭐','🌟','🌠','🌌','🚀','🛸','🛰️','🪐','☄️','👨‍🚀','👩‍🚀','👽','👾','🔭']
    },
    frutas: {
        fondo: '#fff3e0',     
        gradiente: '#ffe0b2',  
        primario: '#e65100', 
        fondoCarta: '#ff9800', 
        acento: '#d84315',
        iconos: ['🍎','🍐','🍊','🍋','🍌','🍉','🍇','🍓','🍈','🍒','🍑','🥭','🍍','🥥','🥝','🍅','🥑','🍆','🥒','🥕','🌽','🌶️','🧄','🧅','🥔','🍠','🥐','🍞','🥖','🥨','🧀','🥚']
    }
};

function aplicarTematica(nombreTematica) {
    const tema = opcionesTematicas[nombreTematica];
    const raiz = document.documentElement;
    raiz.style.setProperty('--color-fondo', tema.fondo);
    raiz.style.setProperty('--color-gradiente', tema.gradiente); 
    raiz.style.setProperty('--color-primario', tema.primario);
    raiz.style.setProperty('--fondo-carta', tema.fondoCarta);
    raiz.style.setProperty('--color-acento', tema.acento);
}