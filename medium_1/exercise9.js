//Question 9
//Function and method calls can take expressions as arguments. 
//Suppose we define a function named rps as follows, 
//which follows the classic rules of the rock-paper-scissors game, 
//but with a slight twist: in the event of a tie,
//it just returns the choice made by both players.

function rps(fist1, fist2) {
  if (fist1 === "rock") {
    return fist2 === "paper" ? "paper" : "rock";
  } else if (fist1 === "paper") {
    return fist2 === "scissors" ? "scissors" : "paper";
  } else {
    return fist2 === "rock" ? "rock" : "scissors";
  }
}

console.log(rps(rps(rps("rock", "paper"), rps("rock", "scissors")), "rock"));

// first iteration rps("rock", "paper")
// paper 
// second iteration rps("rock", "scissors")
// rock
// third iteration rps(rps("rock", "paper"), rps("rock", "scissors"))
// result from third iteration rps("paper", "rock")
// paper
// fourth iteration rps(rps(rps("rock", "paper"), rps("rock", "scissors")), "rock")


//                        rps("rock", "paper"), rps("rock", "scissors") => paper, rock
//                    rps(         paper, rock                         ) => paper
//                rps(                  paper                            , "rock") => paper