//let User = require("js/User.js");
import {User,user1,Assignment, Event} from "./classes.js";

document.addEventListener('DOMContentLoaded', (event) => {
    //Change to Assignments tab
    function AssignmentTab(){
        //select all the assignments and shortcuts
        const shortcuts = document.body.querySelectorAll(".shortcut");
        const assignments = document.body.querySelectorAll(".assignment");
 
        //change color of tab
        assignmentButton.style.backgroundColor = "#D47272";
        shortcutButton.style.backgroundColor = "lightcoral";


        //show assignments
        for(let i = 0; i < assignments.length; i++){
            assignments[i].style.display = "block";
        }

        //while everything is showing
        determineDraggable();

        //hide shortcuts
        for(let i = 0; i < shortcuts.length; i++){
            if(!shortcuts[i].parentElement.id.includes("calendarBox")){
                shortcuts[i].style.display = "none";
            }
        }
    }

    //check and see if "holder" boxes are empty and set make them droppaple if they are
    function determineDraggable(){
        let holders = document.body.querySelectorAll(".holder");
        //check each holder
        for(let i = 0; i < holders.length; i++){
            if(holders[i].hasChildNodes()){
                holders[i].setAttribute("ondragover", "");
            }
            else{
                holders[i].setAttribute("ondragover", "allowDrop(event)")
            }
        }
    }

})