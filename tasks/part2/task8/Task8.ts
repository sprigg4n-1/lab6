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

  public constructor(name: string) {
    this.name = name;
  }
}
