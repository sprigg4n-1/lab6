class Order1 {
  private status: OrderStatus;

  constructor(status: OrderStatus) {
    this.status = status;
  }

  public getStatus(): OrderStatus {
    return this.status;
  }

  public setStatus(status: OrderStatus): void {
    this.status = status;
  }
}

class OrderStatus {
  public static readonly NEW = new OrderStatus('New');
  public static readonly PROCESSING = new OrderStatus('Processing');
  public static readonly COMPLETED = new OrderStatus('Completed');
  public static readonly CANCELLED = new OrderStatus('Cancelled');

  private name: string;

  private constructor(name: string) {
    this.name = name;
  }

  public toString(): string {
    return this.name;
  }
}
