/*  let letters = ["a", "b", "c", "d", "e"];

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

if(!letterFound) {
    console.log("Wrong answer");
} */


/* I had an error whereupon when I entered the array list as uppercase but 
included the keyword toLowerCase() the code would not run correctly; A big 
thank you to GJ for finding the mistake.

*/

/* function guessingGame() {

    let userPoints = 0;
    let user = prompt("what is your name ");

    alert("Hello " + user + ". Would you like to play a game?");

    let videoGames = ["gta","pac man", "zelda","monkey island", "doom", "wonder boy"];

    let answer = prompt("Guess Aaron's favourite Video Game Series").toLowerCase();

    for(let i = 0; i < videoGames.length; i++) {
        if(answer === videoGames[i]) {
            console.log("working!");
            alert("correct");
            userPoints++;
        } 
    }

    alert("You got " + userPoints + "/1 questions correct");
}
     */


