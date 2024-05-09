function searchElement(array: number[], targer: number): void {
  let found: boolean = false;

  for (let i: number = 0; i < array.length; i++) {
    if (array[i] === targer) {
      found = true;
      break;
    }
  }

  if (found) {
    console.log(`The number ${targer} is in the array.`);
  } else {
    console.log(`The number ${targer} is not in the array.`);
  }
}
