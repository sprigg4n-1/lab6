function processOrder(quantity: number, price: number): void {
  if (quantity > 0) {
    if (price > 0) {
      console.log(`Order processed succesfully`);
    } else {
      console.log(`Invalid price`);
    }
  } else {
    console.log(`Invalid quantity`);
  }
}
