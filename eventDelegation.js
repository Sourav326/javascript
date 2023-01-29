/*
If we have many event handlers on the web page than their will be performance issues, 
and to resolve this we use the event delegation.

Event Delegation:- It's a technique of handlng events on the web page in a better way.
this is possible by the event bubbling/capturing

Ex:-
We have 50 categories on the web page and we add event handlers to each category and this can have
performance issues and to resolve this, instead of attaching event handler's to each category,
we will attach the single event handler to their parents
*/
document.querySelector("#categories").addEventListener('click',(e)=>{
    console.log(e.target.id);
});