// Given coordinate and nDigits as numbers,
// return coordinate as string with specific number of digits after point.
const getFixed = (coordinate, nDigits) => coordinate.toFixed(nDigits);

// Given coordinate as number,
// return coordinate as string with default number of digits after point.
const getString = coordinate => coordinate.toString();

const examples = [
  1 / 2,
  1 / 4,
  7 / 8,
  29 / 63,
];

const n = 3;

for (let i = 0; i < examples.length; i += 1) {
  const example = examples[i];

  // initialize gotFixed for n digits
  let gotFixed = getFixed(example, n);
  // initialize gotString
  let gotString = example.toString();
  // if length of gotFixed is less than length of gotString
  if(gotFixed.length < gotString.length) {
    // then output gotFixed
    console.log(gotFixed);
  } else {
    // else output gotString
    console.log(gotString);
  }
}
