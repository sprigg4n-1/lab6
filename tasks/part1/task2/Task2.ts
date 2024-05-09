export class Employee {
  private name: string;
  private salary: number;

  public getSalary(): number {
    return this.salary;
  }
}

export class Company {
  private employees: Employee[] = [];

  public printEmployeeSalaries(): void {}
}
