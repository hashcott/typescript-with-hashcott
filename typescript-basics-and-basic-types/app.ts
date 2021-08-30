const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
} = {
  // const person = {
  name: "Harry Nguyen",
  age: 21,
  hobbies: ["Sports", "Cooking"],
  role: [1, "amdin"],
};

// person.role.push("mod");

// person.role = [1, "admin", "mod"]; Error

let favoriteActivities: string[];
favoriteActivities = ["Sports"];

console.log(person.name);

for (let hobby of person.hobbies) {
  console.log(hobby);
}
