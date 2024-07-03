import '../css/style.css';
import Game from './Game/Game';
import imageGoblin from '../assets/goblin.png';

document.addEventListener('DOMContentLoaded', () => {
  const game = new Game(1000, imageGoblin);
  game.start();
});
