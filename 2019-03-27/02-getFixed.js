// Given coordinate and nDigits as numbers,
// return coordinate as string with specific number of digits after point.
const getFixed = (coordinate, nDigits) => coordinate.toFixed(nDigits);

/*const examples = [
  1 / 2,
  1 / 4,
  7 / 8,
  29 / 63,
];*/

/*for (let i = 0; i < examples.length; i += 1) {
  const example = examples[i];
  console.log(getFixed(example, 3), example);
}*/

console.log(getFixed(1/2, 3), 1/2);
console.log(getFixed(1/4, 3), 1/4);
console.log(getFixed(7/8, 3), 7/8);
console.log(getFixed(29/63, 3), 29/63);
