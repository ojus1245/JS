
console.log(null>0);// false  //comparison operators (>,<,>=,<=) convert null to 0
console.log(null>=0); //  true ///whereas equality operator (==) works differently
console.log(null==0);// false


console.log(undefined > 0); //false
console.log(undefined >= 0); //false
console.log(undefined == 0); // false

// === strict check  (checks not only values but also dataTypes)

console.log("2"==2); //true
console.log("2"===2); //false since dataTypes are different


