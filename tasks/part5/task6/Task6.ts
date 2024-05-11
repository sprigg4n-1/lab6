class Animal {}

class WildAnimal extends Animal {
  hunt(): void {
    console.log('Wild animal is hunting.');
  }
}

class DomesticAnimal extends Animal {
  play(): void {
    console.log('Domestic animal is playing.');
  }
}
