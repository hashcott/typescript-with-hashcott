function add(n1: number, n2: number) {
  return n1 + n2;
}

function printResult(n: number): void {
  console.log("Result", n);
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

printResult(add(10, 4));

let combineValues: (a: number, b: number) => number;

combineValues = add;
// combineValues = printResult;

console.log(combineValues(10, 10));

addAndHandle(10, 15, (result) => {
  console.log(result);
});
