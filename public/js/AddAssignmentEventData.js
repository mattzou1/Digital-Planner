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
        let ass1 = new Assignment(document.getElementById("Aname").value, document.getElementById("Description").value, document.getElementById("Ctime").value/*, document.getElementById("Shortcut").checked*/)
        user.assignments.push(ass1);
        clearFields();

        //commented out when changing the way todo works with shortcuts and stuff
        clearToDo();
        populateToDo();
    });

    let submitEventButton = document.querySelector(".addbtn2");
    submitEventButton.addEventListener("click", function () {
        let reoccuring = [];
        for(let weekday of weekdays){
            reoccuring.push(document.getElementById(weekday).checked);
        }
        let event1 = new Event(document.getElementById("Ename").value, document.getElementById("EventDescription").value, document.getElementById("Stime").value, document.getElementById("Etime").value, reoccuring)
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
            let hours = parseInt(slot.stopTime.substring(0,time.indexOf(":")));
            let minutes = parseInt(slot.stopTime.substring(time.indexOf(":") + 1));

            console.log(hours)
            console.log(minutes)
            
            if(minutes == 30){
                minutes = 0
                lastTime = hours + ":" + minutes + 0
            }
            else{
                hours --;
                minutes = 30
                lastTime = hours + ":" + minutes
            }
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
            length++;
        }
        else if(slot != "empty" && lastTime == time){

            let cell = document.getElementById("calendarBox" + time)
            cell.remove();

            let event = originalCell.firstChild

            //change event style settings for when it is added to calander
            event.style.height = "100%";
            event.style.position = "absolute"
            //IDK why but it doesn't work without this line:
            event.style.bottom = "0%"
            event.parentElement.style.position = "relative"
            length++;
        
            console.log("length")
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
    document.getElementById("reading").checked = false;
    document.getElementById("Description").value = "";
    document.getElementById("Ctime").value = "";
}

function clearFields2() {
    document.getElementById("Ename").value = "";
    document.getElementById("EventDescription").value = "";
    document.getElementById("Stime").value = "";
    document.getElementById("Etime").value = "";
    document.getElementById("Sunday").checked = false;
    document.getElementById("Monday").checked = false;
    document.getElementById("Tuesday").checked = false;
    document.getElementById("Wednesday").checked = false;
    document.getElementById("Thursday").checked = false;
    document.getElementById("Friday").checked = false;
    document.getElementById("Saturday").checked = false;
}