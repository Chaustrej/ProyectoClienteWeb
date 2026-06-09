

var THEMES = {
  emojis: {
    name: 'Emojis',
    label: '😄 Emojis',
    bodyClass: 'theme-emojis',
    icons: [
      '😄','🎉','🌟','🔥','🎈','🦄','🌈','🍕',
      '🎸','👾','🚀','💎','🌺','🦋','🍦','🎩',
      '🐉','🍩','🎯','🧩','🦁','🌙','⚡','💫',
      '🎪','🎭','🦊','🌴','🍀','🎲','🦚','🌊'
    ]
  },
  sports: {
    name: 'Deportes',
    label: '⚽ Deportes',
    bodyClass: 'theme-sports',
    icons: [
      '⚽','🏀','🎾','🏆','🏈','⚾','🏐','🎱',
      '🏓','🏸','⛷️','🤿','🥊','🎽','🏋️','🤸',
      '⛹️','🏊','🚴','🧗','🤺','🏇','🥋','🤼',
      '🏌️','🤾','🏒','🥅','🎿','🛷','🤽','🥇'
    ]
  },
  flags: {
    name: 'Banderas',
    label: '🌍 Banderas',
    bodyClass: 'theme-flags',
    icons: [
      '🇧🇷','🇯🇵','🇫🇷','🇩🇪','🇺🇸','🇦🇷','🇲🇽','🇮🇹',
      '🇪🇸','🇬🇧','🇨🇳','🇰🇷','🇮🇳','🇷🇺','🇨🇦','🇦🇺',
      '🇳🇱','🇸🇪','🇨🇭','🇵🇹','🇵🇱','🇹🇷','🇿🇦','🇳🇬',
      '🇦🇪','🇸🇦','🇪🇬','🇨🇴','🇵🇪','🇨🇱','🇻🇪','🇺🇾'
    ]
  }
};

/**
 * Devuelve los iconos necesarios para el tamaño de tablero dado, mezclados y duplicados.
 * @param {string} themeKey - clave de temática
 * @param {number} pairs - cantidad de pares necesarios
 * @returns {string[]} array de iconos (length = pairs * 2), mezclado
 */
function getShuffledIcons(themeKey, pairs) {
  var theme = THEMES[themeKey];
  var pool = theme.icons.slice(0, pairs);
  var doubled = pool.concat(pool);
  return shuffleArray(doubled);
}

/**
 * Fisher-Yates shuffle
 */
function shuffleArray(arr) {
  var a = arr.slice();
  for (var i = a.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var tmp = a[i]; a[i] = a[j]; a[j] = tmp;
  }
  return a;
}

/**
 * Aplica la clase de tema al body
 */
function applyTheme(themeKey) {
  Object.values(THEMES).forEach(function(t) {
    document.body.classList.remove(t.bodyClass);
  });
  document.body.classList.add(THEMES[themeKey].bodyClass);
}
