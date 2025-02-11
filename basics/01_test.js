const months=["Jan" , "Feb" , "Mar" , "Apr", "May", "Jun", "Jul", "Aug", "Sep" , "Oct" , "Nov", "Dec"];
const days=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];

let func= new Date();
let day= days[func.getDay()];
let month=months[func.getMonth()];
let date= func.getDate();
let year=func.getFullYear();

console.log(`Hello ,i start my journey on ${day} ${month} ${date} ${year}`);
