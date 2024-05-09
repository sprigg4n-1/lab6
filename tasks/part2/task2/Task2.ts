class Oreder {
  private _customer: string;

  private _amount: number;

  constructor(customer: string, amount: number) {
    this.customer = customer;
    this.amount = amount;
  }

  public get customer(): string {
    return this._customer;
  }
  public set customer(value: string) {
    this._customer = value;
  }
  public get amount(): number {
    return this._amount;
  }
  public set amount(value: number) {
    this._amount = value;
  }
}
