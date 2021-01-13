import { IDisplay, Pixel } from './interfaces';

interface DisplayColors {
  display: string;
  emptyPixel: string;
}

const DEFAULT_DISPLAY_COLORS: DisplayColors = {
  display: '#aad751',
  emptyPixel: '#4a752c',
};

export class Display implements IDisplay {
  private context: CanvasRenderingContext2D;
  private pixelSize: number;
  private colors: DisplayColors;
  private _width: number;
  private _height: number;


  constructor(context: CanvasRenderingContext2D, pixelSize: number, colors: DisplayColors = DEFAULT_DISPLAY_COLORS) {
    this.context = context;
    this.pixelSize = pixelSize;

    this._width = Math.floor(context.canvas.width / pixelSize);
    this._height = Math.floor(context.canvas.height / pixelSize);

    this.colors = colors;
  }

  public width(): number {
    return this._width;
  }

  public height(): number {
    return this._height;
  }

  public drawPixels(color: string, ...pixels: Pixel[]) {
    pixels.forEach((pixel) => {
      this._drawPixel(color, pixel);
    });
  }

  public clear() {
    const { context, pixelSize, colors } = this;
    context.beginPath();
    context.rect(0, 0, context.canvas.width, context.canvas.height);
    context.fillStyle = colors.display;
    context.fill();

    for (let i = 0; i < this.width(); i++) {
      for (let j = 0; j < this.height(); j++) {
        context.beginPath();
        context.arc(
          i * pixelSize + pixelSize / 2,
          j * pixelSize + pixelSize / 2,
          1, // pixelSize / 10,
          0, 2 * Math.PI
        );
        context.fillStyle = colors.emptyPixel;
        context.fill();
      }
    }
  }

  private _drawPixel(color: string, pixel: Pixel): void {
    const { context, pixelSize } = this;
    context.beginPath();
    context.rect(
      pixel.x * pixelSize + 1, pixel.y * pixelSize + 1,
      pixelSize - 1, pixelSize - 1
    );
    context.fillStyle = color;
    context.fill();
  }
}
