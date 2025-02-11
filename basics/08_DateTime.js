const myDate=new Date();

console.log(`Current Date and Time: ${myDate}`); //Current Date and Time: Tue Feb 11 2025 18:58:37 GMT+0530 (India Standard Time)

console.log(`Day: ${myDate.getDay()}`); //Day: 2
console.log(`Month: ${myDate.getMonth()}`); //Month: 1 (January is 0)
console.log(`Date: ${myDate.getDate()}`); //Date: 11
console.log(`Year: ${myDate.getFullYear()}`); //Year: 2025
console.log(`Hours: ${myDate.getHours()}`); //Hours: 18

console.log(`Date: ${myDate.toLocaleDateString()}`); Date: 11/2/2025

console.log(`Time: ${myDate.toLocaleTimeString()}`); //Time: 6:58:37 PM


console.log(`date: ${myDate.toLocaleDateString('en-us',{  year:"numeric", day:"2-digit" , month:"long"})}`); //date: February 11, 2025

console.log(`Day: ${myDate.toLocaleDateString('en-us',{weekday:"long"})}`); //Day: Tuesday





