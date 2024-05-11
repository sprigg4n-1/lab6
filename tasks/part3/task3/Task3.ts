function processOrder(quantity: number, price: number) {
  if (quantity > 10 || price > 100) {
    applyDiscount1();
  }
}

function applyDiscount1(): void {
  console.log(`Applying discount`);
}
