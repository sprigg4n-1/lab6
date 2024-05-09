class Address {
  private _street: string;

  private _city: string;

  private _country: string;

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

  public get country(): string {
    return this._country;
  }
  public set country(value: string) {
    this._country = value;
  }
}

class Person {
  private name: string;
  private address: Address;

  public printAddress(): void {
    console.log(
      `Address: ${this.address.street}, ${this.address.city}, ${this.address.country}`
    );
  }
}
