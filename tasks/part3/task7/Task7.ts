class Customer {
  private address: Address;

  constructor(address: Address) {
    this.address = address;
  }

  public getAddress(): Address {
    if (!this.address) {
      return new NullObject();
    }
    return this.address;
  }
}

class Address {
  private _street: string;

  private _city: string;

  public get street(): string {
    return this._street;
  }
  public set street(value: string) {
    this._street = value;
  }
  public get city(): string {
    return this._city;
  }
  public set city(value: string) {
    this._city = value;
  }
}

class NullObject extends Address {
  public get city(): string {
    return 'no';
  }
  public get street(): string {
    return 'no';
  }
}
