class Employee {
  private name: string;
  private salary: number;

  public raiseSalary(amount: number): void {
    if (amount > 0) {
      this.salary += amount;
    }
  }

  public getSalary(): number {
    return this.salary;
  }
}
