class Order {
  private _orderData: OrderData;

  constructor(orderData: OrderData) {
    this.orderData = orderData;
  }

  public get orderData(): OrderData {
    return this._orderData;
  }
  public set orderData(value: OrderData) {
    this._orderData = value;
  }
}

class OrderData {
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
