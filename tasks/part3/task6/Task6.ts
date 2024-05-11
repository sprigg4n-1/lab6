abstract class Shape {
  abstract calculateArea(): number;
}

class Circle extends Shape {
  private _radius: number;

  public get radius(): number {
    return this._radius;
  }
  public set radius(value: number) {
    this._radius = value;
  }

  calculateArea(): number {
    return Math.PI * this._radius * this._radius;
  }
}

class Rectangle extends Shape {
  private _width: number;

  private _height: number;

  public get width(): number {
    return this._width;
  }
  public set width(value: number) {
    this._width = value;
  }

  public get height(): number {
    return this._height;
  }
  public set height(value: number) {
    this._height = value;
  }

  calculateArea(): number {
    return this._width * this._height;
  }
}

function calculateArea(shape: Shape): number {
  return shape.calculateArea();
}
