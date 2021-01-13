import {
  Pixel, Direction, ISnake
} from './interfaces';

export class Snake implements ISnake {
  public pixels: Pixel[];
  public direction: Direction;
  public maxLength: number = 0;

  constructor(pixels: Pixel[], direction: Direction) {
    this.pixels = pixels;
    this.direction = direction;
  }

  public nextPixel() {
    const head = this.pixels[0];
    const { direction } = this;
    return {
      x: head.x + direction.dx,
      y: head.y + direction.dy,
    };
  }

  public changeDirection(direction: Direction) {
    if (Math.abs(direction.dx) == Math.abs(this.direction.dx) && Math.abs(direction.dy) == Math.abs(this.direction.dy)) {
      return;
    }
    this.direction = direction;
  }

  public goTo(pixel: Pixel) {
    this._moveHeadTo(pixel);
    this._moveTail();
  }

  public eatFrom(pixel: Pixel) {
    if (0 < this.maxLength && this.maxLength <= this.pixels.length) {
      this.goTo(pixel);
    } else {
      this._moveHeadTo(pixel);
    }
  }

  private _moveHeadTo(pixel: Pixel) {
    this.pixels.unshift(pixel);
  }

  private _moveTail() {
    this.pixels.pop();
  }
}
