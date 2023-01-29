/*
According to w3c first event capturing happens than bubbling happens


Event bubbling:-  (up words)
-> when we clicked on the child div than the order of function execution is
1.child
2.parent
3.grand parent

-> when clicked on parent than order of function execution is
1.parent
2.grand parent

**********************************************************

Event capturing/trickling(both are same) (down words)
To achieve this we have to pass a third boolean argument in event listner to use event capturing/tricling
if the third argument passed as true than event trickling will happend as:-
-> when click on the child div than order of function execution is
1.Grand parent
2.parent
3.child 

-> when clicked on parent than order of function ececution is
1.grand parent
2.parent
 */

const grandParent = () => {
    console.log("Grand Parent div called...");
}


const parent1 = (e) => {
    console.log("Parent div called...");
    e.stopPropagation();
}

const child = () => {
    console.log("Child div called...");
}

//the output is like this becouse capturing happens first than bubbling happens
document.getElementById("grandParent").addEventListener("click",grandParent,false)//capturing
document.getElementById("parent1").addEventListener("click",parent1,false)//bubbling
document.getElementById("child").addEventListener("click",child,false)//capturing

// we can stop the propagation by event's stopPropagation method (e.stopPropagation();)
// when e.stopPropagation method encounters the progation cycle stops