class Animal {
  public bark(): void {
    console.log(`sound`);
  }
}

class Dog extends Animal {
  public bark(): void {
    console.log(`Woof woof!`);
  }
}

class Cat extends Animal {
  public bark(): void {
    console.log(`Meow meow!`);
  }
}
