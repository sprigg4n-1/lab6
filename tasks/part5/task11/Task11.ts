class Animal {
  eat(): void {
    console.log(`Animal is eating`);
  }

  sleep(): void {
    console.log(`Animal is sleeping`);
  }
}

class Dog extends Animal {
  bark(): void {
    console.log(`Dog is barking`);
  }
}

class Person {
  private readonly animal: Animal;

  constructor(animal: Animal) {
    this.animal = animal;
  }

  interactWithAnimal(): void {
    this.animal.eat();
    this.animal.sleep();
  }
}
