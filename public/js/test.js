//code that populates the calendar with times

import {User,user1,Assignment, Event} from "./classes.js";

let table = document.body.querySelector("table"); //get table
table.style.width = "100%"; //set table width
table.style.height= "100%" //set table height
//document.body.querySelector("tr").style.height = "50px"; //set header height 

document.body.querySelector("th").style.width = "10%";  //set time column width


let tableBod = document.body.querySelector("tbody"); //get table body

//loop through each key in the map
for (let [time] of user1.schedule){
    //console.log(time);
       
    let row = tableBod.insertRow(-1); //insert a row
    row.classList.add("expand");
    let cell1 = row.insertCell(0); //create a cell
    let cell2 = row.insertCell(1); //create another cell
       
    cell1.innerHTML = time; //set the time to that cell
    cell1.style.textAlign = "center";
}


