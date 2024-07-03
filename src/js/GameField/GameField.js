export default class GameField {
  constructor() {
    this.fieldSIze = 4;
    this.container = null;
    this.createField();
  }

  createContainer() {
    const fieldContainer = document.createElement('div');
    fieldContainer.classList.add('field-container');
    document.body.appendChild(fieldContainer);
  }

  createField() {
    this.createContainer();
    this.container = document.querySelector('.field-container');
    for (let index = 0; index < this.fieldSIze ** 2; index++) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      this.container.appendChild(cell);
    }
  }

  getRandomEmptyCell() {
    const cells = document.querySelectorAll('.cell');
    const emptyCells = [...cells].filter((cell) => cell.childElementCount === 0);
    const randomCell = Math.floor(Math.random() * emptyCells.length);
    return emptyCells[randomCell];
  }
}
