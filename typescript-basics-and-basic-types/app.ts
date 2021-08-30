// const person: {
//   name: string;
//   age: number;
// } = {
const person = {
  name: "Harry Nguyen",
  age: 21,
  hobbies: ["Sports", "Cooking"],
};

let favoriteActivities: string[];
favoriteActivities = ["Sports"];

console.log(person.name);

for (let hobby of person.hobbies) {
  console.log(hobby);
}
