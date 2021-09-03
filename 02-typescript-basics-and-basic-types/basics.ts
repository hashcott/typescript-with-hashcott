function add(a: number, b: number, showResult: boolean, phrases: string) {
  const result = a + b;
  if (showResult) {
    console.log(phrases + result);
  } else {
    return result;
  }
}

let number1: number;
number1 = 10;
let number2: number = 6;
let printResult: boolean = true;
let resultPhrase: string = "Result is ";

add(number1, number1, printResult, resultPhrase);
