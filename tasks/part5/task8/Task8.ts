interface Shape {
  calculateArea(): number;
  calculatePerimeter(): number;
}

class Rectangle implements Shape {
  private width: number;
  private height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  public calculateArea(): number {
    return this.width * this.height;
  }

  public calculatePerimeter(): number {
    return 2 * (this.width + this.height);
  }
}

class Square implements Shape {
  private side: number;

  constructor(side: number) {
    this.side = side;
  }

  public calculateArea(): number {
    return this.side * this.side;
  }

  public calculatePerimeter(): number {
    return 4 * this.side;
  }
}
