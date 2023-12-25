let score = "44";

console.log(typeof score); //String
console.log(typeof(score));//String

let valNum = Number(score);
console.log(typeof valNum); //number 

let str = "abc"
console.log(typeof Number(str)); // still output = number
console.log(Number(str)); // output= NaN
//type is number but its NaN since "abc" cannot be converted

let nullVal = null;
console.log(typeof Number(nullVal)); //  output = number
console.log(Number(nullVal)); // output= 0, null converted to 0

let undefVal = undefined;
console.log(typeof undefVal);// undefined
console.log(typeof Number(undefVal)); //  output = number
console.log(Number(undefVal)); // output= NaN

console.log(Number(false)) // gives 0
console.log(Number(true))// gives 1

//similarly, if convertion TO BOOLEAN, 
//1 ==> true; 0 ==> false
//"" ==> false; "Harry" ==> true
