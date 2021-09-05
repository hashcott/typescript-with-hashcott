interface AddFn {
  (a: number, b: number): number;
}

let add: AddFn;

add = (a: number, b: number) => {
  return a + b;
};

interface Info {
  readonly name: string;
  age: number;
}
interface Greetable extends Info {
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

let user1: Greetable = new Person("Harry");
// user1.name = "test";
user1.greet("Hello");
