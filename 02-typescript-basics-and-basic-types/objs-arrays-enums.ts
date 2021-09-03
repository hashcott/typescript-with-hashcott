enum Role {
  ADMIN = 5,
  READ_ONLY,
  AUTHOR = 200,
}

const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: Role;
} = {
  // const person = {
  name: "Harry Nguyen",
  age: 21,
  hobbies: ["Sports", "Cooking"],
  role: Role.ADMIN,
};

// person.role.push("mod");

// person.role = [1, "admin", "mod"]; Error

let favoriteActivities: string[];
favoriteActivities = ["Sports"];

console.log(person.name);

for (let hobby of person.hobbies) {
  console.log(hobby);
}

if (person.role === Role.ADMIN) {
  console.log("is Admin");
}
