class TemperatureConverter {
  public static convertToCelsius(fahrenheit: number) {
    if (fahrenheit < -459.67) {
      console.log(`Error: Temperature below absolute zero`);
      return NaN;
    }
    return ((fahrenheit - 32) * 5) / 9;
  }

  public static main(): void {
    const celsius = this.convertToCelsius(-500);
    if (!isNaN(celsius)) {
      console.log(`Temperature: ${celsius}`);
    }
  }
}
