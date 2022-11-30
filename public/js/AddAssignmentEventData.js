//code to add event and assignment objects to fields in a user object and populate the ToDoList
import {User,user1,Assignment, Event, weekdays} from "./classes.js";

window.addEventListener("DOMContentLoaded", registerSubmitButtons);

let user = user1;
let asscount = 0;

function registerSubmitButtons(){
    let submitAssButton = document.querySelector(".addbtn");
    clearFields();
    submitAssButton.addEventListener("click", function () {
        let ass1 = new Assignment(document.getElementById("Aname").value, document.getElementById("Description").value, document.getElementById("Ctime").value/*, document.getElementById("Shortcut").checked*/)
        user.assignments.push(ass1);
        clearFields();

        //commented out when changing the way todo works with shortcuts and stuff
        //clearToDo();
        populateToDo();
    });

    let submitEventButton = document.querySelector(".addbtn2");
    submitEventButton.addEventListener("click", function () {
        let reoccuring = [];
        for(let weekday of weekdays){
            reoccuring.push(document.getElementById(weekday).checked);
        }
        let event1 = new Event(document.getElementById("Ename").value, document.getElementById("EventDescription").value, document.getElementById("Stime").value, document.getElementById("Etime").value, reoccuring)
        user.addElement(event1.startTime, event1.stopTime, event1);
        clearFields2();
        populateCalendar();
    });
}

function populateCalendar(){
let placed = false
let eventLength = 1;
let originalCell = null;

//Made so I can tell if it's the first loop to save the first cell
let firstLoop = true

    //cannot figure out how to only get 1 time so loop will stay but will quit after first one
    for(let [time] of user.schedule){
        let slot = user.schedule.get(time);
        if(slot != "empty" && !placed){
            let cell = document.getElementById("calendarBox" + time);

            if(firstLoop){
                originalCell = cell;
                firstLoop = false
            }

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
            
            //change so no more will be placed
            placed = true
        }
        else if(slot != "empty" && placed){
            let cell = document.getElementById("calendarBox" + time);
            cell.remove()
            eventLength++
        }
    }

    let event = document.body.querySelector(".event")

    //change event style settings for when it is added to calander
    event.style.height = "100%";
    event.style.position = "absolute"
    //IDK why but it doesn't work without this line:
    event.style.bottom = "0%"
    event.parentElement.style.position = "relative"

    //add span
    originalCell.rowSpan = eventLength;
}

//can be optimized 
function populateToDo(){
    let numHolders = 3;

    //let shortcutcount = 1;
    for(let ass of user.assignments){
        if(!ass.ifDragged){
                let todo = document.querySelector(`#Todo`);
                todo.innerHTML += `<div class = 'assignment' id='assignment${asscount}' draggable='true' ondragstart='drag(event)'> <button type='button' id='removeButton'>X</button> <button type ='button' id='editButton'>Edit</button> <p>${ass.name}</p> <p>${ass.description}</p> <p>${ass.completionTime} minutes</p> </div>`; 
                asscount ++;
            ass.ifDragged = true; 
        }
    }
}

//Clears toDoList
function clearToDo(){
    let numHolders = 3
    for(let i = 1; i <= numHolders; i++){
        let holder = document.querySelector(`[name=ToDo${i}]`);
        holder.innerHTML = "";
    }
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