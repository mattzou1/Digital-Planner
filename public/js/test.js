//code that populates the calendar with times

import {User,user1,Assignment, Event} from "./classes.js";

let table = document.body.querySelector("table"); //get table
table.style.width = "100%"; //set table width
table.style.height= "100%" //set table height
//document.body.querySelector("tr").style.height = "50px"; //set header height 

document.body.querySelector("th").style.width = "10%";  //set time column width

//code that updates the current date on the calendar header
let calheader = document.body.querySelector("#currentDate");
calheader.innerHTML = user1.getCurrentDate();

//updates the current day of the week in the calendar table
let dayOfWeek = document.body.querySelector("#dayOfWeek");
dayOfWeek.innerHTML = user1.getDayOfWeek()

//code that adds times to the table

let tableBod = document.body.querySelector("tbody"); //get table body

for (let [time] of user1.schedule){ //loop through each key in the map
    //console.log(time);
       
    let row = tableBod.insertRow(-1); //insert a row
    row.classList.add("expand");
    let cell1 = row.insertCell(0); //create a cell
    let cell2 = row.insertCell(1); //create another cell
       
    cell1.innerHTML = time; //set the time to that cell
    cell1.style.textAlign = "center";
}