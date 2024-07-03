import GameField from '../../GameField/GameField';

describe('GameField', () => {
  let gameField;

  beforeEach(() => {
    document.body.innerHTML = '';
    gameField = new GameField();
  });

  test('creates a field container', () => {
    expect(document.querySelector('.field-container')).not.toBeNull();
  });

  test('creates correct number of cells', () => {
    const cells = document.querySelectorAll('.cell');
    expect(cells.length).toBe(gameField.fieldSIze ** 2);
  });

  test('getRandomEmptyCell returns a cell element', () => {
    const cell = gameField.getRandomEmptyCell();
    expect(cell).toBeInstanceOf(HTMLElement);
    expect(cell.classList.contains('cell')).toBe(true);
  });
});
