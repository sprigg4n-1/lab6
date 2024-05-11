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
    return this.calculator.add(a, b);
  }
}
