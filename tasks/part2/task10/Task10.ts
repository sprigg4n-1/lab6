class Person {
  private _age: number;

  constructor(age: number) {
    this.age = age;
  }

  public get age(): number {
    return this._age;
  }
  public set age(value: number) {
    this._age = value;
  }
}
