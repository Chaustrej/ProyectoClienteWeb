# Proyecto Repsol — El Universo de la Memoria

**Proyecto:** Memory Match 
**Profesor:** Ing. Victor Kneider

----------Descripción----------

**Repsol** es un juego de memoria interactivo. El jugador debe encontrar todos los pares de cartas en el tablero eligiendo entre tres modos de juego distintos, varias temáticas visuales y tres niveles de dificultad.

|||Integrantes y division del trabajo||

--Juan Chaustre Ci:30886168-- index.html, styles.css, menu.js, hud.js,achievements.js, app.js,README.md

--Nestor Rincon Ci:31249982-- themes.js, styles.css, board.js, Timer.js,state.js, game.js, EndScreen.js
----------------------------------------------------------------

> Nota: Ambos nos coordinamos para la creacion de styles.css y las funciones de los js

======= Instrucciones para ejecutar ========

1. Clonar o descargar el repositorio en tu computadora local.
2. Abrir el archivo `index.html` directamente en cualquier navegador web moderno (no requiere servidor local).
3. Seleccionar el modo de juego, ingresar los nombres, elegir la dificultad y la temática.
4. Presionar el botón **Iniciar Juego**.

Temáticas implementadas

| Temática         | Colores Principales                     | Ejemplo de iconos |

| 🐾 **Animales**  | Tonos verdes naturales y acento naranja | 🐶 🐱 🐼 🦁 🐸 🦉 |
| 🌌 **Espacio**   | Tonos oscuros, azul profundo y carmesí  | 🌍 🚀 👽 🪐 🛰️ ☄️ |
| 🍉 **Frutas**    | Tonos cálidos, naranjas y amarillos     | 🍎 🍌 🍇 🍉 🥑 🥕 |

~~~~~~🏅 Logros implementados en sesión~~~~~~

| Logro              | Descripción        | Condición de desbloqueo |

| **Primer Paso**    | El inicio del reto | Encontrar el primer par de la partida. 

| **Racha Caliente** | Imparable          | Encontrar 3 pares consecutivos sin fallar en el intento. 

| **Velocista**      | Rápido como el rayo | Completar el tablero fácil (4x4) en menos de 30 segundos. |

| **Sin Titubeos**   | Memoria fotográfica | Encontrar un par correcto en el primerísimo movimiento de la partida. |

~~~~~~~~~📁 Estructura de archivos~~~~~~~~~~
  index.html            → Estructura semántica principal
  README.md             → Documentación del proyecto
  /css
    styles.css          → Diseño, Flexbox, Grid dinámico y animaciones 3D
  /js
    state.js            → Variables globales y estado de la aplicación
    themes.js           → Catálogo de temáticas visuales y emojis
    achievements.js     → Definición y verificación del sistema de logros
    timer.js            → Lógica del cronómetro para el modo solitario
    hud.js              → Actualización del panel de control en pantalla
    board.js            → Generación dinámica del tablero y las cartas
    game.js             → Lógica central de emparejamiento y turnos
    endScreen.js        → Pantalla de fin de partida y estadísticas
    menu.js             → Lógica de la pantalla de inicio y configuración
    app.js              → Punto de entrada y mapeo de eventos del DOM

Capturas de pantalla
