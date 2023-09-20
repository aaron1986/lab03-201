let letters = ["a", "b", "c", "d", "e"];

let user = prompt("Enter a letter ").toLowerCase();
let Regex='!/^[a-zA-Z]+$/';


/* while(!(user.match(Regex))){
    console.log("Enter a Letter ");
} */

for(i = 0; i < letters.length; i++) {
    if(user === letters[i]) {
        console.log("correct answer");
    } else if(user != letters[i]) {
        console.log("Wrong answer");
    }

}



