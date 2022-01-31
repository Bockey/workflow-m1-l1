// function cleanString(stringToClean: string) {
//     return stringToClean.replace(/\s/g, "-");
//   }
//   const cleanedString = cleanString("fa s a");
//   console.log(cleanedString);
console.log("hello mtf");
var header = document.querySelector("h1");
header.style.color = "red";
// async function perica(){
//     console.log("Djes Perice!");
// }
// arrays
var animals = ["dog", "cat", "monkey"];
//or
var animalss = new Array("dog", "cat", "monkey");
var winngingNumbers = [1, 2, 3];
//or
var winngingNumberss = new Array(1, 2, 3);
// mixed values - it's called union and is written with |
var multipleTypes;
// union is also used for function parameters 
function DoThings(thing) {
    console.log(typeof thing);
}
DoThings(9);
//tuples Tuples are a special array construct, with a fixed amount of values and types. Unlike regular arrays, the variables stored in tuples must match the type at the position they’re in.
var tuple;
tuple = ["hello", true]; // Valid
//tuple = [true, "hello"]; // Invalid
