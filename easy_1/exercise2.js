// Question 2
// How can you determine whether a given string ends with an exclamation mark (!)?


let str1 = "Come over here!"; // true

console.log(str1.split('').includes('!'));

let str2 = "What's up, Doc?"; // false

console.log(str2.split('').includes('!'));


//str2.endsWith('!'); is also an option