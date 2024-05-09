class Car {
  private brand: string;
  private model: string;
  private year: number;
  private color: string;

  constructor(brand: string, model: string, year: number, color: string) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.color = color;
    this.registerCar();
  }

  private registerCar(): void {
    console.log(`register car: ${this.brand}`);
  }
}
