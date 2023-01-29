/*
Hoisting:- It's a phenomenone by which we are able to excess the variables and 
function before they are initialized.
 */

var aHoisting = 10;
function nameHoisting(){
    console.log("javascript")
}

const colorHoisting = ()=>{
    console.log("Color")
}
console.log(aHoisting);
nameHoisting()
console.log(colorHoisting)