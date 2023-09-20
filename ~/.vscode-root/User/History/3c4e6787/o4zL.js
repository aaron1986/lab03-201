let letters = ["a", "b", "c", "d", "e"];

let user = prompt("Enter a letter ").toLowerCase();
let Regex='!/^[a-zA-Z]+$/';


while(!(user.match(Regex))){
    console.log("Enter a Letter ");
}

for(i = 0; i < letters.length; i++) {
    if(user === letters[i]) {
        console.log("correct answer");
        break;
    } else {
        console.log("Wrong answer");
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