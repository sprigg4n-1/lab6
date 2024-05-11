class Car {
  private brand: string;
  private model: string;
  private year: number;
  private color: string;

  private constructor(
    brand: string,
    model: string,
    year: number,
    color: string
  ) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.color = color;
  }

  private registerCar(): void {
    console.log(`register car: ${this.brand}`);
  }

  public static createCar(
    brand: string,
    model: string,
    year: number,
    color: string
  ): Car {
    const car = new Car(brand, model, year, color);
    car.registerCar();
    return car;
  }
}
