class Employee {
  private _name: string;

  private _department: string;

  private _salary: number;

  public get name(): string {
    return this._name;
  }

  public set name(value: string) {
    this._name = value;
  }

  public get department(): string {
    return this._department;
  }

  public set department(value: string) {
    this._department = value;
  }

  public get salary(): number {
    return this._salary;
  }

  public set salary(value: number) {
    this._salary = value;
  }
}

class EmployeePrintData {
  public printData(emp: Employee): void {
    console.log(`Name: ${emp.name}`);
    console.log(`Department: ${emp.department}`);
    console.log(`Salary: ${emp.salary}`);
  }
}
