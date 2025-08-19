// Primitive datatype

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt
// JavaScript is a Dynamic or non-dynamic

const score = 100
const scoreValue = 100.3


const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log( id === anotherId)

const bignumber = 55421525544
console.log(bignumber)



// Reference(Non Primitive)

// Array, Objects, Functions


const heros = ["Shaktiman","Naagraj","doga"]
let myObj = {
    name:"Chintan",
    age:22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof(myFunction))
