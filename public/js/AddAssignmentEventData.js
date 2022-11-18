//code to add event and assignment objects to fields in a user object and populate the ToDoList
import {User,user1,Assignment, Event} from "./classes.js";

//let classes = require("../js/classes.js");
//create user1
//let user1 = new classes.User(("bob","123","9:30", "13:00"));

window.addEventListener("DOMContentLoaded", registerSubmitButtons)


function registerSubmitButtons(){
    let submitAssButton = document.querySelector(".addbtn");
    submitAssButton.addEventListener("click", function (event) {
        let user = user1;
        let ass1 = new Assignment(document.getElementById("Aname").value, document.getElementById("Description").value, document.getElementById("Ctime").value, document.getElementById("Shortcut").checked)
        user.assignments.push(ass1);
        clearFields();
        clearToDo();
        populateToDo();
    })

    let submitEventButton = document.querySelector(".addbtn2");
    submitEventButton.addEventListener("click", function (event) {
        let user = user1;
        let event1 = new Event(document.getElementById("Ename").value, document.getElementById("EventDescription").value, document.getElementById("Stime").value, document.getElementById("Etime").value)
        user.addElement(event1.startTime, event1.stopTime, event1);
        clearFields2();
    })
}

//can be optimized 
function populateToDo(){
    let user = user1; 
    let numHolders = 3;
    let asscount = 1;
    let shortcutcount = 1;
    for(let ass of user.assignments){
        if(!ass.ifDragged){
            if(ass.shortcut){
                let holder = document.querySelector(`[name=ToDo${shortcutcount}]`);
                holder.innerHTML += `<div class = 'shortcut' id='shortcut${shortcutcount}' draggable='true' ondragstart='drag(event)'> <button type='button' id='removeButton'>X</button> <p>${ass.name}</p> <p>${ass.description}</p> <p>${ass.completionTime} minutes</p> </div>`; 
                shortcutcount ++;
            }
            else{
                let holder = document.querySelector(`[name=ToDo${asscount}]`);
                holder.innerHTML += `<div class = 'assignment' id='assignment${asscount}' draggable='true' ondragstart='drag(event)'> <button type='button' id='removeButton'>X</button> <p>${ass.name}</p> <p>${ass.description}</p> <p>${ass.completionTime} minutes</p> </div>`; 
                asscount ++;
            }
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
    document.getElementById("Shortcut").checked = false;
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