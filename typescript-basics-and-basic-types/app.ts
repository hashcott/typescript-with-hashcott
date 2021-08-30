function add(a: number, b: number, showResult: boolean, phrases: string) {
  const result = a + b;
  if (showResult) {
    console.log(phrases + result);
  } else {
    return result;
  }
}

const number1 = 5;
const number2 = 6;
const printResult = true;
const resultPhrase = "Result is ";

add(number1, number1, printResult, resultPhrase);
