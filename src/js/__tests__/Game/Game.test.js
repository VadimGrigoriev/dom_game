import Game from '../../Game/Game';
import GameField from '../../GameField/GameField';

jest.mock('../../GameField/GameField');

describe('Game', () => {
  let game;
  const mockIntervalTime = 1000;
  const mockImageCharacter = '../../../assets/goblin.png';

  beforeEach(() => {
    jest.useFakeTimers();
    GameField.mockClear();
    GameField.prototype.getRandomEmptyCell.mockReturnValue(document.createElement('div'));
    game = new Game(mockIntervalTime, mockImageCharacter);
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  test('constructor initializes game properly', () => {
    expect(game.intervalTime).toBe(mockIntervalTime);
    expect(game.gameField).toBeInstanceOf(GameField);
    expect(game.character).toBeInstanceOf(HTMLImageElement);
    expect(game.character.src).toContain('goblin.png');
    expect(game.character.classList.contains('character')).toBeTruthy();
  });

  test('placeCharacterToRandomCell places character in a random cell', () => {
    const mockCell = document.createElement('div');
    GameField.prototype.getRandomEmptyCell.mockReturnValue(mockCell);

    game.placeCharacterToRandomCell();

    expect(GameField.prototype.getRandomEmptyCell).toHaveBeenCalled();
    expect(mockCell.contains(game.character)).toBeTruthy();
  });

  test('movementCharacter starts interval to move character', () => {
    jest.spyOn(global, 'setInterval');
    jest.spyOn(game, 'placeCharacterToRandomCell');

    game.movementCharacter();

    expect(setInterval).toHaveBeenCalledWith(expect.any(Function), mockIntervalTime);

    jest.advanceTimersByTime(mockIntervalTime);
    expect(game.placeCharacterToRandomCell).toHaveBeenCalledTimes(2);
  });
});
