document.addEventListener('DOMContentLoaded', (event) => {
    //constants for buttons
    //tabs
    const assignmentButton = document.body.querySelector("#button1");
    const shortcutButton = document.body.querySelector("#button2");

    //select all the assignments and shortcuts
    const assignments = document.body.querySelectorAll(".assignment");
    const shortcuts = document.body.querySelectorAll(".shortcut");

    //set assignments as "clicked" by default
    assignmentButton.style.backgroundColor = "#D47272";
    shortcutButton.style.backgroundColor = "lightcoral";

    //event listeners for button clicks
    //idk why null is needed when calling, but it makes it work...
    //https://stackoverflow.com/questions/256754/how-to-pass-arguments-to-addeventlistener-listener-function
    shortcutButton.addEventListener("click", changeTab.bind(null ,shortcuts, assignments, shortcutButton, assignmentButton));
    assignmentButton.addEventListener("click", changeTab.bind(null , assignments, shortcuts, assignmentButton, shortcutButton));


    //handles the actions performed when tabs are changed
    function changeTab(changeTo, changeFrom, toButton, fromButton){
        //change background color of tab buttons
        toButton.style.backgroundColor = "#D47272";
        fromButton.style.backgroundColor = "lightcoral";

        //show shortcuts
        for(let i = 0; i < changeTo.length; i++){
            changeTo[i].style.display = "block";
        }

        //while everything is showing check which spots are taken
        determineDraggable();

        //hide assignments
        for(let i = 0; i < changeTo.length; i++){
            if(!changeFrom[i].parentElement.id.includes("calendarBox")){
                changeFrom[i].style.display = "none";
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