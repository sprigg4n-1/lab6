class Currency {
  private code: string;

  constructor(code: string) {
    this.code = code;
  }

  public getCode(): string {
    return this.code;
  }
}

class Product {
  private name: string;
  private price: number;
  private currency: Currency;

  constructor(name: string, price: number, currency: Currency) {
    this.name = name;
    this.price = price;
    this.currency = currency;
  }

  public getName(): string {
    return this.name;
  }

  public getPrice(): number {
    return this.price;
  }

  public getCurrency(): Currency {
    return this.currency;
  }
}
