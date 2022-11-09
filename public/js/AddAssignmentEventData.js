//code to add event and assignment objects to fields in a user object 
import {User,user1,Assignment, Event} from "./classes.js";

window.addEventListener("DOMContentLoaded", registerSubmitButtons)

function registerSubmitButtons(){
    let submitAssButton = document.querySelector(".addbtn");
    submitAssButton.addEventListener("click", function (event) {
        let ass1 = new Assignment(document.getElementById("Aname").value, document.getElementById("Description").value, 30, document.getElementById("Shortcut").checked)
        user1.assignments.push(ass1);
        clearFields();
    })

    let submitEventButton = document.querySelector(".addbtn2");
    submitEventButton.addEventListener("click", function (event) {
        let event1 = new Event(document.getElementById("Ename").value, document.getElementById("EventDescription").value, document.getElementById("Stime").value, document.getElementById("Etime").value)
        user1.addElement(event1.startTime, event1.stopTime, event1);
        clearFields2();
    })
}

function clearFields() {
    document.getElementById("Aname").value = "";
    document.getElementById("reading").checked = false;
    document.getElementById("Description").value = "";
    document.getElementById("Shortcut").checked = false;
}

function clearFields2() {
    document.getElementById("Ename").value = "";
    document.getElementById("EventDescription").value = "";
    document.getElementById("Stime").value = "";
    document.getElementById("Etime").value = "";
    document.getElementById("Recurring").checked = false;
}