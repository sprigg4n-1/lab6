class Calculator {
  public add(a: number, b: number): number {
    return a + b;
  }
}

class Processor {
  private calculator: Calculator;

  constructor(calculator: Calculator) {
    this.calculator = calculator;
  }

  public process(a: number, b: number): number {
    const res = this.calculator.add(a, b);
    return res;
  }
}
