export class Shape {
  protected _area: number = 0;
  protected _perimeter: number = 0;

  constructor(area: number, perimeter: number) {
    this._area = area;
    this._perimeter = perimeter;
  }
  public getArea(): number {
    return this._area;
  }

  public getPerimeter(): number {
    return this._perimeter;
  }
}
