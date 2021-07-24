// Will the following functions return the same results?

function first() {
  return {
    prop1: "hi there"
  };
}

function second() {
  return
  {
    prop1: "hi there"
  };
}

console.log(first()); // this will return an object with a key of prop1 and a value "hi there"
console.log(second()); // this will return undefined 
