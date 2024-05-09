class CookingRecipe {
  public prepareRecipe(): void {
    this.boilWater();
    this.addIngredients();
    this.cook();
    this.serve();
  }

  public boilWater(): void {
    console.log('Boiling water');
  }
  public addIngredients(): void {
    console.log('Adding ingredients');
  }
  public cook(): void {
    console.log('Cooking');
  }
  public serve(): void {
    console.log('Serving');
  }
}

class PastaRecipe extends CookingRecipe {
  public addIngredients(): void {
    console.log(`Adding pasta`);
  }

  public cook(): void {
    console.log(`Cooking pasta`);
  }
}

class CakeRecipe extends CookingRecipe {
  public addIngredients(): void {
    console.log(`Adding flour, sugar, eggs, etc.`);
  }

  public cook(): void {
    console.log(`Baking the cake in the overn`);
  }
}
