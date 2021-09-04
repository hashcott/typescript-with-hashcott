interface Greetable {
  name: string;
  age: number;

  greet(phrase: string): void;
}

class Person implements Greetable {
  name: string;
  age = 21;
  constructor(n: string) {
    this.name = n;
  }

  greet(phrase: string) {
    console.log(phrase + " " + this.name);
  }
}

let user1 = new Person("Harry");

user1.greet("Hello");
