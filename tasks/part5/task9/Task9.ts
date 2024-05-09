class Animal {
  private species: string;

  constructor(species: string) {
    this.species = species;
  }

  public eat(): void {
    console.log(`The animal is eating.`);
  }

  public sleep(): void {
    console.log(`The animal is sleeping.`);
  }
}

class Dog extends Animal {
  constructor(species: string) {
    super(species);
  }

  public bark(): void {
    console.log(`The dog is barking.`);
  }
}
