// All are used for function borrowing

let details = {
    fname : 'karan',
    lname : 'Kumar',
    city : "Noida"
}

let fullname = function(years){
    console.log(this.fname+" "+this.lname+" is "+years+" old, from "+this.city);
}

let details2 = {
    fname: "Sukhdev",
    lname: "Singh",
    city: "Mumbai"
}
//CALL
fullname.call(details,20)
fullname.call(details2,35)


//apply - is's same as call the differance is we pass the arments as arrray as second parameter 
fullname.apply(details,[20])

//bind -- it create a copy of the function and we can invoke it later
let printName = fullname.bind(details,20)
console.log(printName);
printName()