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

// function merge<T extends object, U extends object>(objA: T, objB: U) {
//   return Object.assign(objA, objB);
// }

// const mergeObj = merge<{ name: string }, { age: number }>(
//   { name: "Max" },
//   { age: 10 }
// );

// console.log(mergeObj.name);

// interface Lengthy {
//   length: number;
// }
// function countAndDescription<T extends Lengthy>(element: T): [T, string] {
//   let descriptionText = "Got no value";
//   if (element.length === 1) {
//     descriptionText = "Got 1 element.";
//   } else if (element.length) {
//     descriptionText = `Got ${element.length} elements.`;
//   }
//   return [element, descriptionText];
// }

// console.log(countAndDescription("Hi there !"));

// function extractAndConvert<T extends object, U extends keyof T>(
//   obj: T,
//   key: U
// ) {
//   return "Value: " + obj[key];
// }

// console.log(extractAndConvert({ name: "Max" }, "name"));

// class DataStorage<T extends string | number | boolean> {
//   private data: T[] = [];

//   addItem(item: T) {
//     this.data.push(item);
//   }

//   removeItem(item: T) {
//     this.data.splice(this.data.indexOf(item), 1);
//   }
//   getItems() {
//     return [...this.data];
//   }
// }

// const textStorage = new DataStorage<string>();

// textStorage.addItem("Harry");
// textStorage.addItem("Potter");

// console.log(textStorage.getItems());

interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function createCourseGoal(
  title: string,
  description: string,
  date: Date
): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;
  return courseGoal as CourseGoal;
}

const names: Readonly<string[]> = ["Harry", "Potter"];
// names.push("OK");
// names.pop();
