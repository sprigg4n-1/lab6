class Person {
  private name: string;
  private age: number;

  public constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  public setAge(value: number): void {
    this.age = value;
  }
}
