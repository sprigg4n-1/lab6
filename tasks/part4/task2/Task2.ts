function calculateTotal(
  price: number,
  quantity: number,
  taxRate: number
): number {
  const subtotal = price * quantity;
  const tax = subtotal * (taxRate / 100);
  return subtotal + tax;
}
