class Product1 {
  private _name: string;

  constructor(name: string) {
    this.name = name;
  }

  public get name(): string {
    return this._name;
  }

  public set name(value: string) {
    this._name = value;
  }
}

class StandardProduct extends Product1 {
  public proccess(): void {
    console.log(`Processing Standard Product: ${this.name}`);
  }
}

class PremiumProduct extends Product1 {
  public proccess(): void {
    console.log(`Processing Premium Product: ${this.name}`);
  }
}

class DeluxeProduct extends Product1 {
  public proccess(): void {
    console.log(`Processing Deluxe Product: ${this.name}`);
  }
}
