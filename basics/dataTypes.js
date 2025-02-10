let a= 23;  //number range-2 pow 53  ,bigint
let b="Rakesh";// string
let c=true;// boolean
let d=null;//null
let e;//undefined
let f={title:"bhoja",hero:"khushan",age:53,id:5} //object



console.table([typeof(a),typeof(b),typeof(c),typeof(d),typeof(e),typeof(f)]);

/*Note:
typeof(null) =>object
typeof(undefined) =>undefined
typeof(object) => object

*/


/*
On basis of how data is stored it is divided into 2 categories
1.Primitive
2.Non-Primitive

imp:-
1.Call by value:-Og memory refernce is not give a copy of refernce is given ,
changes will only be made in copy and not original value.

2.Call by Reference:- pointer or reference to og value in memory is pass,
changes made will be reflected in the original value

1.Primitive (call by value):
7 TYPES:-
String
Number
Boolean 
Null
Undefined
Symbol  => used for unique declarations eg:- const id=symbol('123') const another_id= symbol('123')  console.log(id===another_id) {false even though same datatype and value}
BigInt

2.Non Primitive (Call by reference):
Arrays
Objects
functions

{Return type for all non primitive wil be object for functions=>function but considered as function objects}

Arrays ==>
    const heroes= ['IronMan', 'Thor','Flash']

Object ==>

    const employee={
    emp_id : 12321
    emp_Name: "Ojus"
    emp_dep: "Devops"
    }




*/