// Question 2
// Starting with the string:

let munstersDescription = "The Munsters are creepy and spooky.";
let description = '';
// Return a new string that swaps the case of all of the letters:

// `tHE mUNSTERS ARE CREEPY AND SPOOKY.`;

for (let i = 0; i < munstersDescription.length; i++) {
  if (munstersDescription[i] === munstersDescription[i].toUpperCase()) {
    description += munstersDescription[i].toLowerCase();
  } else {
    description += munstersDescription[i].toUpperCase();
  }

}

console.log(description)


//another solution 
munstersDescription.split("").map(function(char) {
  if (char === char.toUpperCase()) {
    return char.toLowerCase();
  } else {
    return char.toUpperCase();
  }
}).join("");