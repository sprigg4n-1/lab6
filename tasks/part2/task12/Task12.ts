class Product {
  private name: string;
  private typeCode: ProductType;

  constructor(name: string, typeCode: ProductType) {
    this.name = name;
    this.typeCode = typeCode;
  }

  public getCode(): string {
    return this.typeCode.code;
  }
}

class ProductType {
  private _code: string;

  public get code(): string {
    return this._code;
  }
}
