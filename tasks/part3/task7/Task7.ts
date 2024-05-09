class Customer {
  private address: Address;

  constructor(address: Address) {
    this.address = address;
  }

  public getAddress(): Address {
    return this.address;
  }
}

class Address {
  private street: string;
  private city: string;
}
