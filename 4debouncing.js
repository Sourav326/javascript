/*
******************* DEBOUNCING - How to delay a function. ****************
**************************************************************************
Here this function is called everytime we type something in the search box. 
And API is called everytime.
Here debouncing comes in picture, 
where we called the function if their is some timming gap(as definred by us)
So the count of API call's will be reduced.


Debouncing can be used in scrolling,
Can be used in lazy loading
*/
let counter = 0;
const searchFilter = function (){
    //API call
    console.log("search function called......"+(counter++));
};