//code to add event and assignment objects to fields in a user object and populate the ToDoList
import {getUser, Assignment, Event, weekdays, currentUser} from "./classes.js";

let user = currentUser;
let asscount = 0;

window.addEventListener("DOMContentLoaded", registerSubmitButtons);

getUser(currentUser);


function registerSubmitButtons(){
    let submitAssButton = document.querySelector(".addbtn");
    clearFields();
    submitAssButton.addEventListener("click", function () {
        let ass1 = new Assignment(document.getElementById("Aname").value, document.getElementById("Description").value, document.getElementById("Ctime").value)
        user.assignments.push(ass1);
        clearFields();

        //commented out when changing the way todo works with shortcuts and stuff
        clearToDo();
        populateToDo();
    });

    let submitEventButton = document.querySelector(".addbtn2");
    submitEventButton.addEventListener("click", function () {
        let event1 = new Event(document.getElementById("Ename").value, document.getElementById("EventDescription").value, document.getElementById("Stime").value, document.getElementById("Etime").value)
        if(!user.ifEmpty(event1.startTime, event1.stopTime)){
            window.alert("Space is taken");
        }
        else{
            user.addElement(event1.startTime, event1.stopTime, event1);
            clearFields2();
            populateCalendar();
        }
    });
}

function populateCalendar(){
    let originalCell = null;
    let table = document.body.querySelector("table")
    let length = 0;
    let lastTime = null
  
    //clear out schedule before adding everything back
    for(let row of table.rows){
        //if there is no cell there throw error and add cell
        try{
            row.cells[1].rowSpan = 1
            row.cells[1].innerHTML = ""
        }
        catch{
            row.insertCell(1)

            let newCell = row.cells[1];
            let time = row.cells[0].innerHTML;

            newCell.id = "calendarBox" + time; //create an id ad append the counter
            //added attributes to the calander boxes for dragging
            newCell.setAttribute("class", "holder");
            newCell.setAttribute("ondrop", "drop(event)")
            newCell.setAttribute("ondragover", "allowDrop(event)")
        }
    }

    //cannot figure out how to only get 1 time so loop will stay but will quit after first one
    for(let [time] of user.schedule){

        let slot = user.schedule.get(time);
        //catch if stoptime doesnt exist
        try{
            //Split the time into hours and minutes
            let parts = time.split(':');
            let hours = parseInt(parts[0], 10);
            let minutes = parseInt(parts[1], 10);
            
            // Add 30 minutes to the time
            minutes += 30;
            
            //if min > 60 carry over to next hour
            if (minutes >= 60) {
                minutes -= 60;
                hours++;
            }
            
            if(minutes == 0){
                minutes = "00"
            }
            
            // Format the resulting time as a string in the "HH:MM" format
            lastTime = `${hours}:${minutes}`;
            }
        catch{}

        if(slot != "empty" && slot.startTime == time){
            let cell = document.getElementById("calendarBox" + time)
            originalCell = cell
            //make recurring string
            let reoccuringString = "Reoccuring: "
            for(let [day] of slot.reoccuringDays){
                if(slot.reoccuringDays.get(day)){
                    reoccuringString += day + ", ";
                }
            }
            reoccuringString = reoccuringString.substring(0, reoccuringString.length - 2);

            //add event
            cell.innerHTML = `<div class='event'><button type='button' id='removeButton'>X</button><p>${slot.name}</p><p>${slot.description}</p><p>${reoccuringString}</p></div>`;
            
            let event = cell.firstChild

            //change event style settings for when it is added to calander
            event.style.height = "100%";
            event.style.position = "absolute"
            //IDK why but it doesn't work without this line:
            event.style.bottom = "0%"
            event.parentElement.style.position = "relative"

            length++;
            //if it is only 30 min long
            if(lastTime == slot.stopTime){
                length = 0;
            }
        }
        else if(slot != "empty" && lastTime == slot.stopTime){

            let cell = document.getElementById("calendarBox" + time)
            cell.remove();

            length++;

            //add span
            originalCell.rowSpan = length;
            length = 0

        }
        else if(slot != "empty" && slot.startTime != time){
            let cell = document.getElementById("calendarBox" + time)
            cell.remove();
            length++
        }
    }

}

//can be optimized 
function populateToDo(){
    for(let ass of user.assignments){
        let todo = document.querySelector(`#Todo`);
        if(ass != undefined){
            todo.innerHTML += `<div class = 'assignment' id='assignment${user.assignments.indexOf(ass)}' draggable='true' ondragstart='drag(event)'> <button type='button' id='removeButton'>X</button> <button type ='button' id='editButton'>Edit</button> <p>${ass.name}</p> <p>${ass.description}</p> <p>${ass.completionTime} minutes</p> </div>`;    
        }
    }
}

//Clears toDoList
function clearToDo(){
    let todo = document.querySelector(`#Todo`);
    todo.innerHTML = "<h1 style='font-size:40px'>ToDo List</h1> <div id='buttonsAndPlus'> <div id='addAssignment'></div></div>";
    asscount = 0;
}

function clearFields() {
    document.getElementById("Aname").value = "";
    //document.getElementById("reading").checked = false;
    document.getElementById("Description").value = "";
    document.getElementById("Ctime").value = "";
}

function clearFields2() {
    document.getElementById("Ename").value = "";
    document.getElementById("EventDescription").value = "";
    document.getElementById("Stime").value = "";
    document.getElementById("Etime").value = "";
}