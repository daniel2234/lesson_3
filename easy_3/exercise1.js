// Question 1
// Write three different ways to remove all of the elements from the following array:

let numbers = [1, 2, 3, 4];
numbers = [];
console.log(numbers);

numbers = [1, 2, 3, 4];
numbers.length = 0;
console.log(numbers);


numbers.splice(0, numbers.length);
