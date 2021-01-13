import { IFoodFactory, Food, Pixel, ISnakeFactory, Direction, ISnake } from "./interfaces";
import { Snake } from "./snake";

function random(from: number, to: number) {
  return Math.floor(Math.random() * (to - from)) + from;
}

export class FoodFactory implements IFoodFactory {
  private widthLimit: number;
  private heightLimit: number;
  private energyLimit: number;

  constructor(width: number, height: number, energy: number) {
    this.widthLimit = width;
    this.heightLimit = height;
    this.energyLimit = energy;
  }

  public getFood(energy: number): Food {
    const pixel: Pixel = {
      x: random(0, this.widthLimit),
      y: random(0, this.heightLimit),
    };
    // @TODO: Generated pixel have to be validated, maybe generated position
    // is not available (on this position can be an obstacle, or the snake)
    return {
      pixel,
      energy: energy || random(1, this.energyLimit),
    };
  }
}

export class SnakeFactory implements ISnakeFactory {
  private snakePixels: Pixel[];
  private direction: Direction;
  private maxLength: number;

  constructor(snakePixel: Pixel[], direction: Direction, maxLength: number) {
    this.snakePixels = snakePixel;
    this.direction = direction;
    this.maxLength = maxLength;
  }

  public getSnake(): ISnake {
    const snake = new Snake([...this.snakePixels], this.direction);
    if (this.maxLength > 0) {
      snake.maxLength = this.maxLength;
    }
    return snake;
  }
}
