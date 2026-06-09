
// menu.js — Pantalla de inicio
var Menu = (function () {
  var _selectedMode  = 'solo';
  var _selectedDiff  = 'easy';
  var _selectedTheme = 'emojis';

  function init() {
    _bindModeButtons();
    _bindDiffButtons();
    _bindThemeButtons();
    _bindStartButton();
  }

  function _bindModeButtons() {
    var btns = document.querySelectorAll('.mode-btn');
    btns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        btns.forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');
        _selectedMode = btn.dataset.mode;
        _updateNameFields();
      });
    });
  }

  function _bindDiffButtons() {
    var btns = document.querySelectorAll('.diff-btn');
    btns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        btns.forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');
        _selectedDiff = btn.dataset.diff;
      });
    });
  }

  function _bindThemeButtons() {
    var btns = document.querySelectorAll('.theme-btn');
    btns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        btns.forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');
        _selectedTheme = btn.dataset.theme;
        applyTheme(_selectedTheme);
      });
    });
    // Aplicar tema inicial
    applyTheme(_selectedTheme);
  }

  function _bindStartButton() {
    document.getElementById('start-btn').addEventListener('click', function () {
      var p1 = document.getElementById('player1-name').value.trim() || 'Jugador 1';
      var p2 = document.getElementById('player2-name').value.trim() || 'Jugador 2';

      var config = {
        mode:       _selectedMode,
        difficulty: _selectedDiff,
        theme:      _selectedTheme,
        player1:    p1,
        player2:    p2
      };

      EndScreen.setLastConfig(config);
      Game.start(config);
      showScreen('screen-game');
    });
  }

  function _updateNameFields() {
    var p2Input = document.getElementById('player2-name');
    if (_selectedMode === 'pvp') {
      p2Input.classList.remove('hidden');
    } else {
      p2Input.classList.add('hidden');
    }
  }

  return { init: init };
})();
