export class Shape {
  public getArea(): number {
    return 0;
  }

  public getPerimeter(): number {
    return 0;
  }
}

export class Circle extends Shape {
  private _radius: number;

  public getArea(): number {
    return Math.PI * this.radius * this.radius;
  }

  public getPerimeter(): number {
    return 2 * Math.PI * this.radius;
  }

  public get radius(): number {
    return this._radius;
  }
  public set radius(value: number) {
    this._radius = value;
  }
}

export class Rectangle extends Shape {
  private _width: number;

  private _height: number;

  public getArea(): number {
    return this.width * this.height;
  }

  public getPerimeter(): number {
    return 2 * (this.width + this.height);
  }

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
}
