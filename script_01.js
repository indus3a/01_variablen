/***** Variablen 01 *******/

// Zeilenkommentar

/**
 * Blockkommentar
 */

// Ausgabe
//console.log("hallo");
//console.log(firstName + " " + familyName);

/* Deklaration + Wertzuweisung I 
let firstName;// Deklaration (Definition)
firstName = "Max"; // Wertzuweisung
let familyName = "Mütze"; // Dekl. + Wert.
console.log(firstName);
console.log(familyName);
console.log(firstName + " " + familyName);
*/

/* Deklaration + Wertzuweisung II 
let firstName,familyName;
firstName = prompt("Bitte Vornamen eingeben!");
familyName = prompt("Bitte Namen eingeben!");
console.log("Hallo, " + firstName + " " + familyName + "!");
*/

// JS ist eine untypisierte Sprache! | untyped
let test;  // Deklaration
test = "hi";  // String
test = 2; // Number
test = true; // Boolean

console.log("Typ: " + typeof test);
console.log("Inhalt: " + test);