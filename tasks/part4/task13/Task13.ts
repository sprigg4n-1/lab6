class Calculator {
  public static divide(a: number, b: number): number {
    if (b === 0) {
      return -1;
    }

    return a / b;
  }

  public static main(): void {
    const res = this.divide(10, 0);

    if (res === -1) {
      console.log(`Error: division by zero`);
    } else {
      console.log(`Result: ${res}`);
    }
  }
}
