function processOrder(quantity: number, price: number): void {
  if (quantity <= 0) {
    console.log(`Invalid quantity`);
    return;
  }

  if (price <= 0) {
    console.log(`Invalid price`);
    return;
  }

  console.log(`Order processed successfully`);
}
