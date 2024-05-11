class Department {
  private name: string;
  private manager: Employee;

  public getManager(): Employee {
    return this.manager;
  }
}

class Employee {
  private name: string;

  private department: Department;

  public getManager(): Employee {
    return this.department.getManager();
  }

  public getDepartment(): Department {
    return this.department;
  }
}
