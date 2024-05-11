class Department1 {
  private name: string;
  private manager: Employee1;

  public getManagerName(): string {
    return this.manager.name;
  }
}

class Employee1 {
  private _name: string;
  private _department: Department1;

  public get name(): string {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }
}
