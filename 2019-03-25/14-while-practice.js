const n = 4;
let sum = 0;

let i = 1;
while (i <= n) {
  sum += i ** 2;
  i += 1;
}

console.log(`${sum} is sum of squares of integers up to and including ${n}`);
