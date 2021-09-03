function add(n1: number, n2: number) {
  return n1 + n2;
}

function printResult(n: number): void {
  console.log("Result", n);
}

printResult(add(10, 4));

let combineValues: (a: number, b: number) => number;

combineValues = add;
// combineValues = printResult;

console.log(combineValues(10, 10));
