// Question 2
// What does the last line in the following code output?

let object = { first: [1] }; //assign and an object with a key of first and a value an array of one element of the primitive value of 1
let numArray = object["first"]; //assign and declare numArray to pointer key value of the array 
numArray.push(2);

console.log(numArray); //  => "[1, 2]"
console.log(object); //{ first: [1, 2]}