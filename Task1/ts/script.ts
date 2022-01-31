//Question 1
//Create variables typed with the following types: any, boolean, string, number.

let diverse: any = "nine";
diverse = 9;
console.log(typeof(diverse));

const vallid: boolean = true;
const word: string = "cloud";
const value: number = 10;

//Question 2
//Create an array that can hold only boolean values.

const vallidation: Array<boolean> = new Array(true, false, false);
//or
const isIt: boolean[] = [true, false, false];

//Question 3
//Create an array that can hold either string or number values.

const mixed: (string | number)[] = ["4", 3];

//Question 4
//Create an a tuple with the following types: string, string, number.

let tuple1: [string, string, number];


//Question 5
//Create a function with two parameters. The first accepts either
// a string or boolean value, the second accepts either a number or 
//string value.

function mixing(parameter1: (string | boolean), parameter2: (number | string)){
    //do smth
}

