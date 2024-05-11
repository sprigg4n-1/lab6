export class Employee {
  private _name: string;

  public get name(): string {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }
}

export class Company {
  private employees: Employee[] = [];
  private _salaries: Map<Employee, number> = new Map();

  public getSalary(empl: Employee): number {
    return this._salaries.get(empl) || 0;
  }
  public printEmployeeSalaries(): void {
    this.employees.forEach((emp) => {
      console.log(`${emp.name} - ${this.getSalary(emp)}`);
    });
  }
}
