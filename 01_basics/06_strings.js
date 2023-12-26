//normal way
console.log("price for " + 2+ " cakes is  "+ 20)

let name = "Harry"
let age = 20
//modern way
console.log(`Hello my name is ${name} any my age is ${age}`)
const newName = new String("HarRehmatSingh")
console.log(newName[7]) //7th index of String
//other methods :
//.length, .charAt(), .indexOf(), .toUpperCase(), .trim() etc
//.substring(start index, end index) ==> last not included

//NEW ==>  slice, just like substring but can use negative indexing
console.log(newName.slice(-10, -1));

//.replace(what, with what)
//.includes(what to check)
//.split(separator) ==> gives array
