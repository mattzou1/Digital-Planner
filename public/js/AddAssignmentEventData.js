import {User,user1,Assignment, Event} from "./classes.js";


//console.log(user1);

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
        console.log("bye");
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