import { Display } from './display';
import { FoodFactory, SnakeFactory } from './factories';
import { Game } from './game';

class GameModal {
  private $window: HTMLElement;
  private _isOpened: boolean;

  constructor($window: HTMLElement) {
    this.$window = $window;

    const { classList } = this.$window;
    this._isOpened = classList.contains('modal-instructions') ||
      classList.contains('modal-game-over') ||
      classList.contains('modal-resume')
    ;
  }

  public isOpened() {
    return this._isOpened;
  }

  public close() {
    const { classList } = this.$window;
    classList.remove('modal-instructions');
    classList.remove('modal-game-over');
    classList.remove('modal-resume');
    this._isOpened = false;
  }

  public gameOver() {
    this._openType('modal-game-over');
  }

  public resume() {
    this._openType('modal-resume');
  }

  public instructions() {
    this._openType('modal-instructions');
  }

  private _openType(type: string) {
    if (!this.$window.classList.contains(type)) {
      this.close()
      this.$window.classList.add(type);
      this._isOpened = true;
    }
  }

}

function createGame($canvas: HTMLCanvasElement): Game {
  const display = new Display($canvas.getContext('2d'), 20);

  const snakeFactory = new SnakeFactory([
    {x: 2, y: 12}, {x: 1, y: 12}, {x: 0, y: 12}
  ], {dx: 1, dy: 0}, 256);

  const foodFactory = new FoodFactory(25, 25, 5);

  const game = new Game(display, snakeFactory, foodFactory, {
    colors: {
      snakeHead: '#1c469d',
      snake: '#4875eb',
      food: '#e7471d',
    },
    displayHasWall: true,
  });

  return game;
}

function main() {
  const $closeModal = document.querySelector('.close-modal');
  const $bestScore = document.querySelectorAll('.game-best-score span');
  const $bestScoreWrapper = document.querySelectorAll('.game-best-score');
  const $gameScore = document.querySelectorAll('.game-score span');

  const modal = new GameModal(
    document.querySelector('.game-modal')
  );

  const $canvas = document.getElementById('display') as HTMLCanvasElement;
  const game = createGame($canvas);
  game
  .on('scoreUpdated', function(score: number) {
    const strScore = score.toString();
    for (let i = 0; i < $gameScore.length; i++) {
      $gameScore[i].innerHTML = strScore;
    }
  })
  .on('bestscoreUpdated', function(score: number) {
    const strScore = score.toString();
    for (let i = 0; i < $bestScore.length; i++) {
      $bestScore[i].innerHTML = strScore;
    }
    if (score > 0) {
      for (let i = 0; i < $bestScoreWrapper.length; i++) {
        $bestScoreWrapper[i].classList.remove('invisible')
      }
    }
  })
  .on('gameOver', function() {
    modal.gameOver();
  })
  ;

  document.addEventListener('keypress', function(event: KeyboardEvent) {
    switch (event.code) {
      case 'KeyW':
        game.exec('changeDirection', 'top');
        break;
      case 'KeyS':
        game.exec('changeDirection', 'bottom');
        break;
      case 'KeyA':
        game.exec('changeDirection', 'left');
        break;
      case 'KeyD':
        game.exec('changeDirection', 'right');
        break;
      case 'Space':
        if (modal.isOpened()) {
          $closeModal.dispatchEvent(new Event('click'));
        } else {
          if (game.isRunning()) {
            game.exec('pause');
            modal.resume();
          } else {
            game.exec('play');
          }
        }
        break;
    }
  })
  ;

  $closeModal.addEventListener('click', function() {
    modal.close();
    if (game.isFinished()) {
      game.reset();
    } else if (!game.isRunning()) {
      game.exec('play');
    }
  });
}

main();
