// Modulo para manejar la interfaz del HUD (movimientos, tiempo, pares, etc)
var HUD = (function () {
  var _mode = 'solo';

  function init(config) {
    _mode = config.mode;

    // Theme badge
    var badge = document.getElementById('hud-theme-badge');
    badge.textContent = THEMES[config.theme].label;

    renderStatic(config);
  }

  function renderStatic(config) {
    var center = document.getElementById('hud-center');
    var right  = document.getElementById('hud-right');
    center.innerHTML = '';
    right.innerHTML  = '';

    if (config.mode === 'solo') {
      center.appendChild(makeStatBox('JUGADOR', config.player1, 'hud-player-name'));
      center.appendChild(makeStatBox('MOVIMIENTOS', '0', 'hud-moves'));
      center.appendChild(makeStatBox('TIEMPO', '00:00', 'hud-time'));
      center.appendChild(makeStatBox('PARES', '0', 'hud-pairs'));

    } else if (config.mode === 'pvp') {
      var p1Card = makePlayerCard(config.player1, 0, true);
      var p2Card = makePlayerCard(config.player2, 1, false);
      center.appendChild(p1Card);
      center.appendChild(makeStatBox('MOVIMIENTOS', '0', 'hud-moves'));
      center.appendChild(p2Card);

    } else { // free
      center.appendChild(makeStatBox('JUGADOR', config.player1, 'hud-player-name'));
      center.appendChild(makeStatBox('MOVIMIENTOS', '0', 'hud-moves'));
      center.appendChild(makeStatBox('PARES', '0', 'hud-pairs'));
    }
  }

  function makeStatBox(label, value, id) {
    var div = document.createElement('div');
    div.className = 'hud-stat';
    div.innerHTML =
      '<span class="hud-stat-label">' + label + '</span>' +
      '<span class="hud-stat-value" id="' + id + '">' + value + '</span>';
    return div;
  }

  function makePlayerCard(name, idx, active) {
    var div = document.createElement('div');
    div.className = 'player-card' + (active ? ' active' : '');
    div.id = 'player-card-' + idx;
    div.innerHTML =
      '<span class="p-name">' + name + '</span>' +
      '<span class="p-score" id="p-score-' + idx + '">0</span>' +
      (active ? '<span class="turn-indicator">▶ Turno</span>' : '');
    return div;
  }

  function update(state) {
    // Movimientos
    var movEl = document.getElementById('hud-moves');
    if (movEl) movEl.textContent = state.moves;

    // Tiempo (solo en modo solo)
    if (_mode === 'solo') {
      var timeEl = document.getElementById('hud-time');
      if (timeEl) timeEl.textContent = Timer.format(Timer.getElapsedMs());
    }

    // Pares
    var pairsEl = document.getElementById('hud-pairs');
    if (pairsEl) pairsEl.textContent = state.totalMatches;

    // PvP scores & turno activo
    if (_mode === 'pvp') {
      state.players.forEach(function (p, i) {
        var scoreEl = document.getElementById('p-score-' + i);
        if (scoreEl) scoreEl.textContent = p.score;

        var card = document.getElementById('player-card-' + i);
        if (card) {
          var isActive = i === state.activeIdx;
          card.classList.toggle('active', isActive);
          // Actualizar indicador de turno
          var existing = card.querySelector('.turn-indicator');
          if (isActive && !existing) {
            var ind = document.createElement('span');
            ind.className = 'turn-indicator';
            ind.textContent = '▶ Turno';
            card.appendChild(ind);
          } else if (!isActive && existing) {
            existing.remove();
          }
        }
      });
    }
  }

  return { init: init, update: update };
})();