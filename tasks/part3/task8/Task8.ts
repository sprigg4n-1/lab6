function calculateAverage(numbers: number[]) {
  if (numbers.length === 0) {
    throw new Error('empty');
  }

  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum / numbers.length;
}
