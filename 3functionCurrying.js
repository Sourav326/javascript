//Function Curring******************
//In functional programming curring is used to transform the function with diffrent parametrs.

//In this example:-  
/*
***** FUNCTION CURRYING WITH BIND METHOD ******
-> we define a function multiply witch requires two parameters 'x' and 'y'
-> Now with help of bind method we creates a copy of multiply method as multiplyByTwo with singe argument for 'x'
-> Now call the multiplybyTwo method with a argument which behaves as secong parameter for multiply method.
-> get the output as 4.

*/
function multiply(x,y){
    console.log(x * y);
}

const multiplyByTwo = multiply.bind(this,2);
multiplyByTwo(2);

const multiplyByThree = multiply.bind(this,2);
multiplyByThree(3);

/*
***** FUNCTION CURRYING WITH CLOSURES *******
Closures:- function with its lexical scope forms a closure
*/
const multiplyclose = function (x){
    return function(y){
        console.log(x*y);
    }
}

const multiplyByTwoClose = multiplyclose(5);
multiplyByTwoClose(2);

const multiplyByThreeClose = multiplyclose(5);
multiplyByThreeClose(3);


const myMultipleClose = function(x){
    return function(y){
        console.log(x * y);
    }
}
myMultipleClose(5);