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



