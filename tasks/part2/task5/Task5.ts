class CarData {
  private cars: Car[] = [];

  constructor(cars: Car[]) {
    this.cars = cars;
  }
}

class Car {
  private _name: string;

  private _price: number;

  private _year: number;

  constructor(name: string, price: number, year: number) {
    this.name = name;
    this.price = price;
    this.year = year;
  }

  public get name(): string {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }
  public get price(): number {
    return this._price;
  }
  public set price(value: number) {
    this._price = value;
  }
  public get year(): number {
    return this._year;
  }
  public set year(value: number) {
    this._year = value;
  }
}
