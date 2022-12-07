//code that populates the calendar with times and formats calendar (row width, height length)

import {getUser,getFormattedDate,getDayOfWeek} from "./classes.js";

let user1 = getUser();

//formatting for table:
let table = document.body.querySelector("table"); //get table
//remove weird empty second row
table.deleteRow(1)
table.style.width = "100%"; //set table width
//table.style.height= "100px" //set table height
document.body.querySelector("tr").style.height = "50px"; //set header height 
//document.body.querySelector("#dayOfWeek").style.font-size = "1.2em"; //increase header font

document.body.querySelector("th").style.width = "10%";  //set time column width

//code that updates the current date on the calendar header
let calheader = document.body.querySelector("#currentDate");
calheader.innerHTML = getFormattedDate(); //set calendar header to current date

//updates the current day of the week in the calendar table
let dayOfWeek = document.body.querySelector("#dayOfWeek");
dayOfWeek.innerHTML = getDayOfWeek() //set calendar header to day of week

//code that adds times to the table

let tableBod = document.body.querySelector("tbody"); //get table body

let count = 1; //used to increment id number

for (let [time] of user1.schedule){ //loop through each time in the schedule
    let row = tableBod.insertRow(-1); //insert a row
    row.id = "myRow";

    let cell1 = row.insertCell(0); //create a cell
    let cell2 = row.insertCell(1); //create another cell
    
    cell2.id = "calendarBox" + time; //create an id ad append the counter

    //added attributes to the calander boxes for dragging
    cell2.setAttribute("class", "holder");
    cell2.setAttribute("ondrop", "drop(event)")
    cell2.setAttribute("ondragover", "allowDrop(event)")
    
    count++; //increment counter

    cell1.innerHTML = time; //set the time to that cell
    cell1.style.textAlign = "center";
    let height = "150px"
    cell1.style.height = height;
    cell2.style.height = height;
}