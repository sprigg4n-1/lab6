class Animal {
  private species: string;

  constructor(species: string) {
    this.species = species;
  }

  public eat(): void {
    console.log(`The ${this.species} is eating.`);
  }

  public sleep(): void {
    console.log(`The ${this.species} is sleeping.`);
  }

  public bark(): void {
    console.log(`The ${this.species} is barking.`);
  }
}
