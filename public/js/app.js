/*
    This file is a compilation of examples of how to access and modify the DOM.

    These examples are mostly taken from our ZyBooks textbook, and from a course on
    web development taught by Colt Steele (and from my own head).

    Feel free to peruse this file as needed.
*/


setTimeout(() => {
    input.type = 'color';
}, 3000);


setTimeout(() => {
    let image = document.querySelector("img");
    image.src = "/img/eggs.jpg";
}, 3000);

setTimeout(() => {
    let h1 = document.querySelector("h1");
    h1.style.border = '1px solid cyan';
}, 3000)




// /******************************************
//     CREATING NEW ELEMENTS
//  ******************************************/

setTimeout(() => {
    let newP = document.createElement("p");
    newP.innerText = "Hello world! I've been born!";
    let body = document.querySelector("body");
    body.appendChild(newP);

}, 3000);

