class Department {
  private name: string;
  private emplyess: Employee[];

  constructor(name: string, emplyess: Employee[]) {
    this.name = name;
    this.emplyess = emplyess;
  }
}

class Employee {
  private name: string;
  private department: Department;

  public constructor(name: string, department: Department) {
    this.name = name;
    this.department = department;
  }
}
