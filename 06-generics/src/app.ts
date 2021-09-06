// const names: Array<string> = []; // string[]
// // names[0].split(" ");

// const promise: Promise<string> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("This is done!");
//   }, 2000);
// });

// promise.then((data) => {
//   data.split(" ");
// });

function merge<T, U>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergeObj = merge<{ name: string }, { age: number }>(
  { name: "Max" },
  { age: 10 }
);

console.log(mergeObj.name);
