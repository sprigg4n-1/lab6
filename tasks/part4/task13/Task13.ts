class Calculator {
  public static divide(a: number, b: number): number {
    if (b === 0) {
      throw new Error('Division by zero');
    }

    return a / b;
  }

  public static main(): void {
    try {
      const res = this.divide(10, 0);
      console.log(`Result: ${res}`);
    } catch (error) {
      console.log(`Error: ${error.message}`);
    }
  }
}
