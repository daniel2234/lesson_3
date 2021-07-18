// Question 5
// The following function unnecessarily uses two return statements to return boolean values. Can you rewrite this function so it only has one return statement and does not explicitly use either true or false?

function isColorValid(color) {
  if (color === "blue" || color === "green") {
    return true;
  } else {
    return false;
  }
}
//my solution
function isColorValid(color) {
  return color === "blue" || color === "green";
}

//another solution based on arrow function
const isColorValid = color => color === "blue" || color === "green";