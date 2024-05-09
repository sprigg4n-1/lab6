class Order1 {
  private status: number;

  public static readonly NEW = 0;
  public static readonly PROCESSING = 1;
  public static readonly COMPLETED = 2;
  public static readonly CANCELLED = 3;

  constructor(status: number) {
    this.status = status;
  }
}
