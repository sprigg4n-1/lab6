class Person {
  private name: string;
  private street: string;
  private city: string;
  private country: string;

  public printAddress(): void {
    console.log(
      `Owner: ${this.name} \nAddress: ${this.street}, ${this.city}, ${this.country}`
    );
  }
}
