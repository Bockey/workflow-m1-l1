

// function cleanString(stringToClean: string) {
//     return stringToClean.replace(/\s/g, "-");
//   }
  
//   const cleanedString = cleanString("fa s a");
//   console.log(cleanedString);
  
console.log("hello mtf");
const header = document.querySelector("h1");
header.style.color = "red";

// async function perica(){
//     console.log("Djes Perice!");
// }
    
// arrays

const animals: string[] = ["dog", "cat", "monkey"]; 
//or
const animalss: Array<string> = new Array("dog", "cat", "monkey");

let winngingNumbers: number[] = [1, 2, 3]; 
//or
let winngingNumberss: Array<number> = new Array(1,2,3);

// mixed values - it's called union and is written with |

let multipleTypes: (string | boolean)[];

// union is also used for function parameters 

function DoThings(thing: boolean | number){
    console.log(typeof thing);
}
DoThings(9);

//tuples Tuples are a special array construct, with a fixed amount of values and types. Unlike regular arrays, the variables stored in tuples must match the type at the position they’re in.
let tuple: [string, boolean];

tuple = ["hello", true]; // Valid

//tuple = [true, "hello"]; // Invalid

