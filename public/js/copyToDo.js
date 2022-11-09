//let classes = require("js/classes.js");
//import {User} from "js/classes";

document.addEventListener('DOMContentLoaded', (event) => {
    
    
    //create user
    //let user1 = new User(1,1,"9:30", "13:00");
    //console.log(user1.schedule);
           
    //constants for buttons
    //tabs
    const assignmentButton = document.body.querySelector("#button1");
    const shortcutButton = document.body.querySelector("#button2");
    //add assignment
    const add = document.body.querySelector("#addAssignment");
    //constant for event button
    const eventButton = document.body.querySelector("#eventButton");


    //set assignments as "clicked" by default
    assignmentButton.style.backgroundColor = "#D47272";
    shortcutButton.style.backgroundColor = "lightcoral";


    //event listeners for button clicks
    shortcutButton.addEventListener("click", ShortcutTab);
    assignmentButton.addEventListener("click", AssignmentTab);
    add.addEventListener("click", addAssignment);
    eventButton.addEventListener("click", eventButtonHandler);

    //Change to shortcut tab
    function ShortcutTab(){
        //select all the assignments and shortcuts
        const assignments = document.body.querySelectorAll(".assignment");
        const shortcuts = document.body.querySelectorAll(".shortcut");

        //change color of tab
        shortcutButton.style.backgroundColor = "#D47272";
        assignmentButton.style.backgroundColor = "lightcoral";


        //show shortcuts
        for(let i = 0; i < shortcuts.length; i++){
            shortcuts[i].style.display = "block";
        }
        
        //while everything is showing
        determineDraggable();

        //hide assignments
        for(let i = 0; i < assignments.length; i++){
            if(assignments[i].parentElement.id != "calendarBox"){
                assignments[i].style.display = "none";
            }
        }
    }

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
            if(shortcuts[i].parentElement.id != "calendarBox"){
                shortcuts[i].style.display = "none";
            }
        }
    }

    function determineDraggable(){
        let holders = document.body.querySelectorAll(".holder");
        for(let i = 0; i < holders.length; i++){
            if(holders[i].hasChildNodes()){
                holders[i].setAttribute("ondragover", "");
            }
            else{
                holders[i].setAttribute("ondragover", "allowDrop(event)")
            }
        }
    }

    //alert that an assignment was added on click
    function addAssignment(){
        alert("Assignment Added!")
    }

    //When event button is clicked, make an alert
    function eventButtonHandler(){
        alert("Event Added!")
    }
})
