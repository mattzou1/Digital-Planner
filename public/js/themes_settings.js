
let checkbox = document.body.querySelector("#theme"); //Gets the theme checkbox

checkbox.addEventListener("click", checkboxHandler); //Listens for if checkbox for dark theme is checked

function checkboxHandler(){ //gets list of classes and will add or remove the dark class depending on if it is hidden or not
    document.body.classList.toggle('dark'); //switches between dark mode and our chosen default theme
    
    if (document.body.classList.contains('dark')){ //if dark mode is turned on...
        localStorage.setItem("dark", "on"); //set localstorage to dark/on as key/value pair
    }
    else{ //if dark mode is not turned on/if it is turned off...
        localStorage.setItem("dark", "off");
    }
}

if (localStorage.getItem("dark") == "on"){ //if localstorage has the value "on" for "dark" key...
    document.body.classList.toggle('dark');  //toggle to dark mode
}

//could use localstorage to make dark theme persist when user goes away from page or to other pages
//to-do:
    //toggle to dark theme
    //if toggled to dark, in localstorage set the key to "dark" and String value to "on"
    //do i need an else if not toggled then "dark" is "off"??
//then get from local storage the key value pairs
    //if dark mode is "on"
    //make the theme dark
//this should remember what user did...


// function themeHandler(event){
//     let choice = event.value;

//     let ran1 = 0; 
//     let ran2 = 0; 
//     let ran3 = 0;

//     if (choice == "Default"){
//         document.body.style.background = "lightcoral";
//         document.body.querySelector("#escapeButton").style.background = "white";
//         document.body.querySelector("#h1").style.background = "#007E6F";
//         document.body.querySelector("#logoutButton").style.background = "#007E6F";
//         document.body.querySelector("#submitButton").style.background = "#007E6F";
//     }
//     if (choice == "Pastel"){
//         ran1 = 190;
//         ran2 = 190;
//         ran3 = 247;
//         document.body.style.background = "rgb(" + ran1 + ", " + ran2 + ", " +  ran3 + ")";
//         document.body.querySelector("#escapeButton").style.background = "white";
//         document.body.querySelector("#logoutButton").style.background = "#bbfcdd";
//         document.body.querySelector("#submitButton").style.background = "#bbfcdd";
//         document.body.querySelector("#h1").style.background = "#bbfcdd";
//         document.body.querySelector("#h1").style.color = "black";
//         document.body.querySelector("#logoutButton").style.color = "black";
//         document.body.querySelector("#submitButton").style.color = "black";

//     }
//     if (choice == "Matrix"){
//         ran1 = 0;
//         ran2 = 0;
//         ran3 = 0;
//         document.body.style.background = "rgb(" + ran1 + ", " + ran2 + ", " +  ran3 + ")";
//         document.body.querySelector("#escapeButton").style.background = "white";
//         document.body.querySelector("#logoutButton").style.background = "#5fe868";
//         document.body.querySelector("#submitButton").style.background = "#5fe868";
//         document.body.querySelector("#h1").style.background = "#5fe868";
//         document.body.querySelector("#h1").style.color = "black";
//         document.body.querySelector("#logoutButton").style.color = "black";
//         document.body.querySelector("#submitButton").style.color = "black";
//     }

// }

//if submit is pressed, settings should be changed 


// function mouseIn(event){
//     let choice = event.value;

//     if (choice == "default"){
//         document.body.querySelector("#logoutButton").style.background = "#41B3A3";
//         document.body.querySelector("#submitButton").style.background = "#41B3A3"; 
//     }
//     if (choice == "one"){
//         document.body.querySelector("#logoutButton").style.background = "black";
//         document.body.querySelector("#submitButton").style.background = "black"; 

//     }
//     if (choice == "two"){
//         document.body.querySelector("#logoutButton").style.background = "blue";
//         document.body.querySelector("#submitButton").style.background = "blue"; 
//     }

// }

// function mouseOut(event){
//     let choice = event.value;

//     if (choice == "default"){
//         document.body.querySelector("#logoutButton").style.background = "#007E6F";
//         document.body.querySelector("#submitButton").style.background = "#007E6F";
//     }
//     if (choice == "one"){
//         document.body.querySelector("#logoutButton").style.background = "black";
//         document.body.querySelector("#submitButton").style.background = "black"; 

//     }
//     if (choice == "two"){
//         document.body.querySelector("#logoutButton").style.background = "blue";
//         document.body.querySelector("#submitButton").style.background = "blue"; 
//     }

// }



//DOM is loaded
//window.addEventListener("DOMContentLoaded", handler);

// function handler(){ //event handler for after DOM is loaded 
//     let dropDown = document.querySelector("#themes"); //get the themes drop down element
//     console.log("value first: " + dropDown.value)
//     dropDown.addEventListener("change", themeHandler(dropDown)); //listen for if drop down menu value is changed
// }

// function themeHandler(dropDown){ //event handler for if drop down menu value is changed
//     //let dDown = document.querySelector("#themes"); get the themes drop down element
//     let value = dropDown.value; //value of drop down menu
//     console.log("The value is " + value);
    
//     let ran1 = 0; 
//     let ran2 = 0; 
//     let ran3 = 0;

//     if (value == "one"){
//         console.log("chose theme one");
//         ran1 = 31;
//         ran2 = 15;
//         ran3 = 112;
//         document.body.style.background = "rgb(" + ran1 + ", " + ran2 + ", " +  ran3 + ")";
//         document.body.querySelector("#escapeButton").style.background = "rgb(" + ran1 + ", " + ran2 + ", " +  ran3 + ")";
//     }


// }
