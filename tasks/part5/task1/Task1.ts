class Vehicle {
  protected color: string;

  constructor(color: string) {
    this.color = color;
  }
}

class Car extends Vehicle {
  private model: string;

  constructor(color: string, model: string) {
    super(color);
    this.model = model;
  }
}

class Truck extends Vehicle {
  private loadCapacity: number;

  constructor(color: string, loadCapacity: number) {
    super(color);
    this.loadCapacity = loadCapacity;
  }
}
