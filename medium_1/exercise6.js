// Question 6
// What do you think the following code will output?

let nanArray = [NaN];

console.log(nanArray[0] === NaN);

// How can you reliably test if a value is NaN?

//you can test if the value is NaN with Number.isNaN()
Number.isNaN(nanArray[0]);