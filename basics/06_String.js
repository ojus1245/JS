let str1=new String('himesh-123@gmail.com');
let str2="himesh-123@gmail.com"
// console.log(typeof str1); // object
//  console.log(typeof str2); // string

//convert integer to string
let num1="13"

// console.log(typeof num1); // number
// console.log(num1.toString()+12); // ans: 1312
// console.log(num1+12); //ans: 25

//convert string to number
// console.log((Number)(num1)+12);


//Functions 
//slice

// console.log(str1.slice(0,8)); // himesh-1
// console.log(str1.slice(9)); // 3@gmail.com

//split
// console.log(str1.split('-')); //[ 'himesh', '123@gmail.com' ]

//replace
// console.log(str1.replace("him" , "ram")); ramesh-123@gmail.com

//length
// console.log(str1.length); // 19

//toUpperCase
// console.log(str1.toUpperCase()); //HIMESH-123@GMAIL.COM

//Similarly for toLowerCase()


//trim() removes whitespaces from start and end of string
// console.log("   himesh  ".trim()); // himesh

//charAt() returns the character at the specified index (0-based)
// console.log(str1.charAt(0)); //h

//charCodeAt() returns the Unicode of the character at the specified index (0-based)
// console.log(str1.charCodeAt(0)); //104 for h


//indexOf() returns the first occurrence of a specified value in a string
// console.log(str1.indexOf('@')) //10


//lastIndexOf() returns the last occurrence of a specified value in a string
// console.log(str1.lastIndexOf('i')); //14

//search() returns the index of the first occurrence of a specified value in a string
console.log(str1.search('ail'));//13


