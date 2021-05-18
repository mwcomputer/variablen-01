/***** Variablen 01 *******/

// Das ist ein Zeilen-Kommentar

/**
Block-Kommentar
 */

// Ausgabe
//console.log("Hallo Welt!");
//console.log(firstName);

// Deklaration + Wertzuweisung
/*
let firstName; // Deklaration (Difinition)
firstName = "Max"; // Wertzuweisung
console.log(firstName); // Ausgabe
let familyName = "Mütze"; // Deklaration + Werrtzuweisung
console.log(familyName); // Ausgabe
console.log(firstName+" "+familyName);
*/

// Deklaration + Wertzuweisung II
/*
let firstName,familyName;
firstName = prompt("Bitte Vornamen eingeben");
familyName = prompt("Bitte Name eingeben");
console.log("Hallo, " + firstName + " " + familyName + "!");
*/

//JS ist eine untypische Sprache! | untype
/*
let test; //Deklaration
test = "hi";
test = 2;
test = true; // boolean
console.log("Typ: " + typeof test);
console.log("inhalt: " + test); 
*/

/***** Variablen 02 *******/
/*
// Deklaration
let ageJohn, ageMark;
let birthYearJohn,birthYearMark;

// Wertzuweisung | Assignement
let date = new Date();
let year = date.getFullYear();
ageJohn = 25;
ageMark = 30;

//Operation (Differenz)
birthYearJohn = year - ageMark;
birthYearMark = year - ageJohn;

console.log("Aktuelles Jahr: " + year);
console.log("birthYearJohn: " + birthYearJohn);
console.log("birthYearMark: " + birthYearMark);
*/

/***** Variablen 03 *******/

let ageJohn, ageMark;
ageJohn = 25;
ageMark = 30;

// Opperation (Vergleich/Test)
let isJohnOlder = (ageJohn > ageMark);
console.log(isJohnOlder);






















