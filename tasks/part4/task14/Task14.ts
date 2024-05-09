class TemperatureConverter {
  public static convertToCelsius(fahrenheit: number) {
    if (fahrenheit < -459.67) {
      throw new Error(`Below zero`);
    }
    return ((fahrenheit - 32) * 5) / 9;
  }

  public static main(): void {
    try {
      const celsius = this.convertToCelsius(-500);

      console.log(`Temperature: ${celsius}`);
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  }
}
