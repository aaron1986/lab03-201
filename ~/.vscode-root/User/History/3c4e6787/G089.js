let letters = ["a", "b", "c", "d", "e"];

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

let user2 = prompt("Wrong Answer try again...").toLowerCase();
if(!letterFound) {
    console.log("Wrong Answer...");
    user2 = prompt("Wrong Answer try again...").toLowerCase();
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



let videoGames = ["GTA", "Mario", "Pac Man", "Monkey Island"];