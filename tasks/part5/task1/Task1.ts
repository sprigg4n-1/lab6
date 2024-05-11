class Vehicle {
  protected color: string;
  protected brand: string;

  constructor(color: string, brand: string) {
    this.color = color;
    this.brand = brand;
  }
}

class Car extends Vehicle {
  private model: string;

  constructor(color: string, brand: string, model: string) {
    super(color, brand);
    this.model = model;
  }
}

class Truck extends Vehicle {
  private loadCapacity: number;

  constructor(color: string, brand: string, loadCapacity: number) {
    super(color, brand);
    this.loadCapacity = loadCapacity;
  }
}
