//changes themes of settings 
//event listener for if drop down menu got a one

function themeHandler(event){
    let choice = event.value;

    let ran1 = 0; 
    let ran2 = 0; 
    let ran3 = 0;

    if (choice == "Default"){
        document.body.style.background = "lightcoral";
        document.body.querySelector("#escapeButton").style.background = "white";
        document.body.querySelector("#h1").style.background = "#007E6F";
        document.body.querySelector("#logoutButton").style.background = "#007E6F";
        document.body.querySelector("#submitButton").style.background = "#007E6F";
    }
    if (choice == "Pastel"){
        ran1 = 190;
        ran2 = 190;
        ran3 = 247;
        document.body.style.background = "rgb(" + ran1 + ", " + ran2 + ", " +  ran3 + ")";
        document.body.querySelector("#escapeButton").style.background = "white";
        document.body.querySelector("#logoutButton").style.background = "#bbfcdd";
        document.body.querySelector("#submitButton").style.background = "#bbfcdd";
        document.body.querySelector("#h1").style.background = "#bbfcdd";
        document.body.querySelector("#h1").style.color = "black";
        document.body.querySelector("#logoutButton").style.color = "black";
        document.body.querySelector("#submitButton").style.color = "black";

    }
    if (choice == "Matrix"){
        ran1 = 0;
        ran2 = 0;
        ran3 = 0;
        document.body.style.background = "rgb(" + ran1 + ", " + ran2 + ", " +  ran3 + ")";
        document.body.querySelector("#escapeButton").style.background = "white";
        document.body.querySelector("#logoutButton").style.background = "#5fe868";
        document.body.querySelector("#submitButton").style.background = "#5fe868";
        document.body.querySelector("#h1").style.background = "#5fe868";
        document.body.querySelector("#h1").style.color = "black";
        document.body.querySelector("#logoutButton").style.color = "black";
        document.body.querySelector("#submitButton").style.color = "black";

    }
    
}

function mouseIn(event){
    let choice = event.value;

    if (choice == "default"){
        document.body.querySelector("#logoutButton").style.background = "#41B3A3";
        document.body.querySelector("#submitButton").style.background = "#41B3A3"; 
    }
    if (choice == "one"){
        document.body.querySelector("#logoutButton").style.background = "black";
        document.body.querySelector("#submitButton").style.background = "black"; 

    }
    if (choice == "two"){
        document.body.querySelector("#logoutButton").style.background = "blue";
        document.body.querySelector("#submitButton").style.background = "blue"; 
    }

}

function mouseOut(event){
    let choice = event.value;

    if (choice == "default"){
        document.body.querySelector("#logoutButton").style.background = "#007E6F";
        document.body.querySelector("#submitButton").style.background = "#007E6F";
    }
    if (choice == "one"){
        document.body.querySelector("#logoutButton").style.background = "black";
        document.body.querySelector("#submitButton").style.background = "black"; 

    }
    if (choice == "two"){
        document.body.querySelector("#logoutButton").style.background = "blue";
        document.body.querySelector("#submitButton").style.background = "blue"; 
    }

}



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
