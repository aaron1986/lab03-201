/* let letters = ["a", "b", "c", "d", "e"];

let user = prompt("Enter a letter ").toLowerCase();
let Regex='!/^[a-zA-Z]+$/';


while(!/^[a-zA-Z]+$/.test(user)){
    console.log("Only letters are allowed ");
    user = prompt("Only letters are allowed ").toLowerCase();
}

let letterFound = false;

for(i = 0; i < letters.length; i++) {
    if(user === letters[i]) {
        console.log("correct answer");
        letterFound = true;
        break;
    } 

} 
 */


/* 
    let userPoints = 0;
    let user = prompt("what is your name ");

    alert("Hello " + user + ". Would you like to play a game?");

    let videoGames = ["GTA","Pac Man", "Zelda","Monkey Island", "Doom", "Wonder Boy"];

    let answer = prompt("Guess Aaron's favourite Video Game Series").toLowerCase().trim();

    for(let i = 0; i < videoGames.length; i++) {
        if(answer === videoGames[i]) {
            console.log("working!");
            alert("correct");
            userPoints++;
        } 
    }

    if(videoGames.indexOf(answer) >= 0) {
        alert("You got it right!");
        userPoints++;
    }

    alert("You got " + userPoints + "/1 questions correct"); */

    let userPoints = 0;
    let user = prompt("what is your name ");

    alert("Hello " + user + ". Would you like to play a game?");

    // a question with multiple correct answers
    let favFoods = ["pizza", "pasta", "garlic bread"];
    
    let foodAns = prompt("What is one of Tim's favourite foods?").toLowerCase();
    
    // USE ONLY ONE OF THE FOLLOWING
    
    // using a loop to check if the answer was in the array
    for (let i = 0; i < favFoods.length; i++) {
      // here we check if
      if (foodAns === favFoods[i]) {
        alert("yeah nice");
        userPoints++;
      }
    }
    // using indexOf to check if the answer is in the arry
    if (favFoods.indexOf(foodAns) >= 0) {
      alert("You got it right!");
      userPoints++;
    }
    
    // how would the logic look so it checks if foodAns is in the favFoods array
    alert("You got " + userPoints + "/1 questions correct");



/* 
let letters = ["a", "b", "c", "d", "e"];

let user = prompt("Enter a letter ").toLowerCase();
let Regex='!/^[a-zA-Z]+$/';


while(!/^[a-zA-Z]+$/.test(user)){
    console.log("Enter a Letter ");
    user = prompt("Enter a Letter ");
} 

let letterFound = false;

for(i = 0; i < letters.length; i++) {
    if(user === letters[i]) {
        console.log("correct answer");
        letterFound = true;
        break;
    } 
}

if(!letterFound) {
    console.log("Wrong answer");
} */

