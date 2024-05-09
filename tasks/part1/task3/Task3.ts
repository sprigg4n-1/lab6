class Employee {
  private name: string;
  private department: string;
  private salary: number;

  public printEmployeeDetails(): void {
    console.log(`Name: ${this.name}`);
    console.log(`Department: ${this.department}`);
    console.log(`Salary: ${this.salary}`);
  }
}
