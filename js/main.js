
// alert("Hello World!")

// console.log("Hello World!")
// keywords in variable declaration
// they inlcude: var or let
// var username : username here is an identifier
// variable name cannot be started with a number or a special character
// you cannot use space but you can use underscore i.e snake case
// camel case: the first letter of every word is capitalized
// Pascal case: start ever word capitalized
// quotes "" are for Strings alone
// Float boolean and int does not require quotes

var username = "Emmanuel"
let age = 59
var is_running = false

// console.log(username)


// THE LIST DATA TYPY USES THE SQUARE BRACKET
// WHERE WE USE 
// PUSH FOR MOVING AN ITEM INTO THE ARRAY
// SHIFT TO REMOVE THE FIRST ITEM WILL FROM THE ARRAY
// POP TO REMOVE THE LAST ITEM FROM THE ARRAY
// SPLICE CAN BE USED TO REMOVE ITEMS FROM THE ARRAY WITH STATING THEIR POSITIONS i.e(1,2) meaning 1 to 2



let mylist = [
    "Mango",
    "Orange",
    "Pawpaw"
]

console.log(mylist)
mylist.splice(1,2)
console.log(mylist)



// OBJECT DATA TYPE USES THE CURLY BRACKET
let myphone = {
    brand : "Redmi",
    color : "Green",
    screen_size : 6,
}

let mypowerbank = {
    brand : "Oraimo",
    capacity_mah : 30000,
    color : "Black",
    output : ["USB-C","4_USB"],
    input : 2
}
mypowerbank.brand = "Itel"

console.log(mypowerbank)

// PROMPT FUNCTION HELPS TO ASK QUESTION FROM A 
// We use an assignment function to store the result
// let x = prompt("What is your name")
// alert("Welcome"+x)

// LEARNING FLOW CONTROL


// ele.innerHtml = "Hello from JS"

function checkAge(){
    alert("clicked")
}
let ele= document.querySelector("#mydiv")
let personAge = document.querySelector("#PersonAge")

function checkAge(){
    // ele.innerHtml = personAge.value
    var age = personAge.value
}

// DOM DOCUMENT OBJECT MODEL 13 AUGUSGT 2024
