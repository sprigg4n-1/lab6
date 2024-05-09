class Animal {
  makeSound(): void {
    console.log(`Animal makes a sound`);
  }
}

class Dog extends Animal {}

class Cat extends Animal {
  makeSound(): void {
    console.log(`Meow`);
  }
}
