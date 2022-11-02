document.addEventListener('DOMContentLoaded', (event) => {
    //constants for tab buttons
    const assignmentButton = document.body.querySelector("#button1");
    const shortcutButton = document.body.querySelector("#button2");

    //set assignments as "clicked" by default
    assignmentButton.style.backgroundColor = "#D47272";
    shortcutButton.style.backgroundColor = "lightcoral";


    //event listeners for button clicks
    shortcutButton.addEventListener("click", ShortcutTab);
    assignmentButton.addEventListener("click", AssignmentTab);


    //Change to shortcut tab
    function ShortcutTab(event){
        const assignments = document.body.querySelectorAll("#assignment");
        const shortcuts = document.body.querySelectorAll("#shortcut");

        //change color of tab
        shortcutButton.style.backgroundColor = "#D47272";
        assignmentButton.style.backgroundColor = "lightcoral";

        //hide assignments
        for(let i = 0; i < assignments.length; i++){
            assignments[i].style.display = "none";
        }

        //show shortcuts
        for(let i = 0; i < shortcuts.length; i++){
            shortcuts[i].style.display = "block";
        }
    }

    //Change to Assignments tab
    function AssignmentTab(event){
        const shortcuts = document.body.querySelectorAll("#shortcut");
        const assignments = document.body.querySelectorAll("#assignment");
 
        //change color of tab
        assignmentButton.style.backgroundColor = "#D47272";
        shortcutButton.style.backgroundColor = "lightcoral";


        //hide shortcuts
        for(let i = 0; i < shortcuts.length; i++){
            shortcuts[i].style.display = "none";
        }

        //show assignments
        for(let i = 0; i < assignments.length; i++){
            assignments[i].style.display = "block";
        }
    }
})