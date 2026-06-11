var Timer = (function () {
  var _startTime = 0;
  var _elapsed   = 0;
  var _interval  = null;
  var _running   = false;
  var _onTick    = null;

  function start(onTickCallback) {
    if (_running) return;
    _onTick = onTickCallback || null;
    _startTime = Date.now() - _elapsed;
    _running = true;
    _interval = setInterval(function () {
      _elapsed = Date.now() - _startTime;
      if (_onTick) _onTick(_elapsed);
    }, 100);
  }

  function pause() {
    if (!_running) return;
    clearInterval(_interval);
    _elapsed = Date.now() - _startTime;
    _running = false;
  }

  function stop() {
    clearInterval(_interval);
    _running = false;
  }

  function reset() {
    stop();
    _elapsed = 0;
    _startTime = 0;
  }

  function getElapsedMs() {
    if (_running) return Date.now() - _startTime;
    return _elapsed;
  }

  function getElapsedSeconds() {
    return Math.floor(getElapsedMs() / 1000);
  }

  function format(ms) {
    var total = Math.floor(ms / 1000);
    var m = Math.floor(total / 60);
    var s = total % 60;
    return (m < 10 ? '0' : '') + m + ':' + (s < 10 ? '0' : '') + s;
  }

  return { start: start, pause: pause, stop: stop, reset: reset,
           getElapsedMs: getElapsedMs, getElapsedSeconds: getElapsedSeconds,
           format: format };
})();
