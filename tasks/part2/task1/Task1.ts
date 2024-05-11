class Employee {
  private _name: string;

  private _salary: number;

  public raiseSalary(amount: number): void {
    if (amount > 0) {
      this.salary += amount;
    }
  }

  public getSalary(): number {
    return this.salary;
  }

  public get name(): string {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }
  public get salary(): number {
    return this._salary;
  }
  public set salary(value: number) {
    this._salary = value;
  }
}
