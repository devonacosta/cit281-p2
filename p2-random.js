/*
    CIT 281 Project 2
    Name: Devon Acosta
*/

 // Returns a random number 
function getRandomInteger() {
    return Math.floor(Math.random());
}

// returns a random letter from alphabet constant
function getRandomLetter() {
    return alphabet[Math.floor(Math.random() * alphabet.length)];
}

const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");


 // returns a random length string between minLength and maxLength
function getRandomString(minLength, maxLength) {
    return Math.floor(Math.random()) * (maxLength - minLength) + minLength;
}
 
let result = "";

let lengthOfOutputString = getSortedString();


// returns a sorted string in ascending order through an array method
function getSortedString(string) { 
    return string = "xpacd".split('').sort().join('');
}

for (let i = 0; i < lengthOfOutputString; i++) {
    result += alphabet[getSortedString(alphabet.length)];
}

console.log(getSortedString("xpacd"));
