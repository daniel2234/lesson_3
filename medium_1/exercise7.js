// What is the output of the following code?

let answer = 42;

function messWithIt(someNumber) {
  return (someNumber += 8); //this will return invalid left-hand side in assignment
}

let newAnswer = messWithIt(answer);

console.log(answer - 8); //34