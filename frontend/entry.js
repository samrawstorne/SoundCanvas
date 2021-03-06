const Canvas = require('./lib/canvas.js');
const MusicTracker = require('./lib/music_tracker.js');
const GameUI = require('./lib/game_ui.js');

document.addEventListener("DOMContentLoaded", function(){
  const gameUI = new GameUI();

  const canvasEl = document.getElementById('canvas');
  gameUI.setupCanvas(canvasEl, [canvasEl.width, canvasEl.height]);

  const musicFrame = document.getElementById('music-tracker');

  gameUI.setupMusicTracker(musicFrame);
  gameUI.setupButtons(document.getElementById('dashboard'));
  gameUI.setupSelects(document.getElementById('options'));
  gameUI.setupDemoSelector(document.getElementById('demo-selector'));


  window.gameUI = gameUI;
  window.canvas = gameUI.canvas;

});
