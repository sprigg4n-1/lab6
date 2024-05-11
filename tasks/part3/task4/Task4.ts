function searchElement(array: number[], target: number): void {
  for (let i: number = 0; i < array.length; i++) {
    if (array[i] === target) {
      console.log(`The number ${target} is in the array.`);
      return;
    }
  }

  console.log(`The number ${target} is not in the array.`);
}
