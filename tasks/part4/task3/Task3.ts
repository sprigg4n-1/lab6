function calculateTotal1(
  price: number,
  quantity: number,
  discount: number
): number {
  return price * quantity * (1 - discount);
}
