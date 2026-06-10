var DIFFICULTY = {
  easy:   { cols: 4, rows: 4 },
  medium: { cols: 6, rows: 6 },
  hard:   { cols: 8, rows: 8 }
};

var Board = (function () {
  var _cards = [];       // Array de objetos { el, icon, index, matched, flipped }
  var _locked = false;
  var _onCardClick = null;
  var _diff = 'easy';

  function init(diffKey, themeKey, onCardClickCb) {
    _diff = diffKey;
    _onCardClick = onCardClickCb;
    _locked = false;
    _cards = [];

    var cfg = DIFFICULTY[diffKey];
    var pairs = (cfg.cols * cfg.rows) / 2;
    var icons = getShuffledIcons(themeKey, pairs);

    var boardEl = document.getElementById('board');
    boardEl.innerHTML = '';

    // Card size based on difficulty
    var sizeMap = { easy: 90, medium: 70, hard: 56 };
    var fontMap  = { easy: '2.2rem', medium: '1.7rem', hard: '1.3rem' };
    var cardSize = sizeMap[diffKey];
    var cardFont = fontMap[diffKey];

    boardEl.style.gridTemplateColumns = 'repeat(' + cfg.cols + ', ' + cardSize + 'px)';
    boardEl.style.setProperty('--card-size', cardSize + 'px');
    boardEl.style.setProperty('--card-font', cardFont);

    icons.forEach(function (icon, i) {
      var cardObj = createCard(icon, i, cardSize, cardFont);
      _cards.push(cardObj);
      boardEl.appendChild(cardObj.el);
    });
  }

  function createCard(icon, index, size, font) {
    var el = document.createElement('div');
    el.className = 'card';
    el.style.width  = size + 'px';
    el.style.height = size + 'px';
    el.innerHTML =
      '<div class="card-inner">' +
        '<div class="card-face card-back"></div>' +
        '<div class="card-face card-front" style="font-size:' + font + '">' + icon + '</div>' +
      '</div>';

    el.addEventListener('click', function () {
      if (_locked) return;
      var card = _cards[index];
      if (card.matched || card.flipped) return;
      if (_onCardClick) _onCardClick(card);
    });

    return { el: el, icon: icon, index: index, matched: false, flipped: false };
  }

  function flipCard(card) {
    card.flipped = true;
    card.el.classList.add('flipped');
  }

  function unflipCard(card) {
    card.flipped = false;
    card.el.classList.remove('flipped');
  }

  function markMatched(card) {
    card.matched = true;
    card.flipped = true;
    card.el.classList.add('matched');
  }

  function markWrong(card1, card2) {
    card1.el.classList.add('wrong');
    card2.el.classList.add('wrong');
    setTimeout(function () {
      card1.el.classList.remove('wrong');
      card2.el.classList.remove('wrong');
    }, 500);
  }

  function lock()   { _locked = true;  }
  function unlock() { _locked = false; }

  function getCards() { return _cards; }
  function getDiff()  { return _diff;  }
  function getPairs() { return _cards.length / 2; }

  function allMatched() {
    return _cards.every(function (c) { return c.matched; });
  }

  return {
    init: init, flipCard: flipCard, unflipCard: unflipCard,
    markMatched: markMatched, markWrong: markWrong,
    lock: lock, unlock: unlock, getCards: getCards,
    getDiff: getDiff, getPairs: getPairs, allMatched: allMatched
  };
})();

