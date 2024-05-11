class OrderManager {
  private order: Order;

  constructor(order: Order) {
    this.order = order;
  }
}

class Order {
  private _customerName: string;

  private _productName: string;

  private _quantity: number;

  constructor(customerName: string, productName: string, quantity: number) {
    this.customerName = customerName;
    this.productName = productName;
    this.quantity = quantity;
  }

  public get customerName(): string {
    return this._customerName;
  }
  public set customerName(value: string) {
    this._customerName = value;
  }
  public get productName(): string {
    return this._productName;
  }
  public set productName(value: string) {
    this._productName = value;
  }
  public get quantity(): number {
    return this._quantity;
  }
  public set quantity(value: number) {
    this._quantity = value;
  }
}
