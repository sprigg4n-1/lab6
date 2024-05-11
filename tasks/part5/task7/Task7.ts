class Employee {
  private name: string;
  private salary: number;

  constructor(name: string, salary: number) {
    this.name = name;
    this.salary = salary;
  }

  public displayDetails(): void {
    console.log(`Name: ${this.name}`);
    console.log(`Salary: ${this.salary}`);
  }
}

class Manager extends Employee {
  private department: string;

  constructor(name: string, salary: number, department: string) {
    super(name, salary);
    this.department = department;
  }

  public displayDetails(): void {
    super.displayDetails();
    console.log(`Department: ${this.department}`);
  }
}
