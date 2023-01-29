/*
localStorage:- It allows us to access the storage object for the document. The stored data is saved across browser sessions. It is similar to sessionStorage, 
expect that while localstorage data has no expiration time, sessionStorage data gets cleared when the page
sesion ends(when the page is closed or new tab is opened). 
*/

// console.log(localStorage);//or window.localStorage
// localStorage.setItem("name","sourav")//to set the item in key:value pair
// console.log(localStorage.getItem("name"));//to get the item
localStorage.clear()//to clear the localstorage
//localstorage saves string only, than how we can save the object
const obj = {
    name:"karan",
    age:23,
    tecnology:"javascript"
}
// localStorage.setItem("obj",obj)//this will save the object object as localstorage saves the string
localStorage.setItem("user",JSON.stringify(obj))
//but it is saved as string but in the form of object so while getting it we have to parse it as
console.log(JSON.parse(localStorage.getItem("user")));
// console.log(JSON.parse(localStorage.getItem(user)));

/*
sessionStorage:- Data in sessionStorage is expired/cleared when the page session ends.
When new tab opens than new session storage is created for that perticular tab.
*/
// console.log(sessionStorage);
sessionStorage.setItem('technology','javascript222')
console.log(sessionStorage.getItem("technology"))