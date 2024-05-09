function proccessPayment(
  amount: number,
  isMember: boolean,
  isDiscountAvailable: boolean
) {
  if (amount > 100 && isMember) {
    applyDiscount();
  }
  if (amount > 200 && isDiscountAvailable) {
    applyDiscount();
  }
}

function applyDiscount(): void {
  console.log(`Applying discount`);
}
