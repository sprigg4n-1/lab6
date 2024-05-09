class Product1 {
  private name: string;
  private typeCode: number;

  constructor(name: string, typeCode: number) {
    this.name = name;
    this.typeCode = typeCode;
  }

  public proccess(): void {
    if (this.typeCode === 1) {
    } else if (this.typeCode === 2) {
    } else {
    }
  }
}
