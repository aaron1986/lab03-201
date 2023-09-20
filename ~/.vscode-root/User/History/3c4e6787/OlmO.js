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

function guessGame() {

    let videoGames = ["GTA","Pac Man", "Zelda","Monkey Island", "Doom", "Wonder Boy"];

    let Answer = prompt("Guess Aaron's favourite Video Game Series").toLowerCase();
    
    for(let i = 0; i < videoGames.length; i++) {
        if(Answer === videoGames[i]) {
            alert("correct");
        } 
    
    }
}
 



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

