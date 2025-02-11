let score = 33;

console.log(typeof (score));

let score2= String(score);

console.log(typeof (score2));

/*
if Score="33abc"
and then convert from string to number then the conversion will happen
and type of will return number
but when we console log it will print Nan which is(Not a number)

same for undefined 
for null => 0

for true => 1
for false => 0

and when we convert string to number which contains number => valid
when we convert string to number which contains only strings or string and number => Nan whill be printed

Eg:-
"33" => 33
"33abc" => NaN

1 (to boolean) => true 
0 (to boolean) => false
empty string => false
"ojus" => true 

*/


/*
Operations

console.log("1"+2)  // ans:- 12
console.log(1+"2")  // ans:- 12
console.log("1"+2+2) // ans:- 122
console.log(1+2+"2")  // ans:- 32

*/

// console.log(1+2+"2"+1+2+"1")  ans:- 32121

// console.log(true); ans:- true

//console.log(+true) ans:-1  (the value of bool is converted to number for addition) (4+true) => 5

//Increment Decrement postfix prefix operator

let x=3
let y=x++
console.log(`x: ${x} y: ${y}`); // x=4 y=3

let a=3;
let b=++a;
console.log(`a: ${a} b: ${b}`); // a=4 b=4



