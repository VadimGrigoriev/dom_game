import GameField from '../GameField/GameField';

export default class Game {
  constructor(intervalTime, imageCharacter) {
    this.intervalTime = intervalTime;
    this.gameField = new GameField();
    this.character = document.createElement('img');
    this.character.src = imageCharacter;
    this.character.classList.add('character');
    this.placeCharacterToRandomCell();
    this.movementCharacter();
  }

  placeCharacterToRandomCell() {
    const cell = this.gameField.getRandomEmptyCell();
    cell.appendChild(this.character);
  }

  movementCharacter() {
    setInterval(() => {
      this.placeCharacterToRandomCell();
    }, this.intervalTime);
  }
}
