export interface Pixel {
  x: number;
  y: number;
}

export interface Direction {
  dx: number;
  dy: number;
}

export interface IDisplay {
  width(): number;
  height(): number;
  drawPixels(color: string, ...pixels: Pixel[]): void;
  clear(): void;
}

export interface ISnake {
  pixels: Pixel[];
  direction: Direction;

  nextPixel(): Pixel;
  changeDirection(direction: Direction): void;
  goTo(pixel: Pixel): void;
  eatFrom(pixel: Pixel): void;
}

export interface Food {
  pixel: Pixel;
  energy: number;
}

export interface IFoodFactory {
  getFood(energy: number): Food;
}

export interface ISnakeFactory {
  getSnake(): ISnake;
}
