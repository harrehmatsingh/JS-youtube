"use strict"; //treat all js code as newer version
//alert("hello world!") ==> won't work, since using node js (not browser)

let name = "Har"
let age = 20
let bool = false

let a;
console.log(a)//undefined

//number (like 'int' in java)
//bigint
//string ==> " "
//boolean ==> true/false
//null ==> standalone (pointing to kind of nothing)
//undefined ==> when not definied

console.log(typeof age) //number
console.log(typeof name) //string
console.log(typeof bool) //boolean

console.log(typeof null) //object ==> special
console.log(typeof undefined)//undefined