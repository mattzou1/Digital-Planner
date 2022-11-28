import {User,user1,Assignment, Event, weekdays} from "./classes.js";

document.addEventListener('DOMContentLoaded', (event) => {

    const removeButtonWrapper = document.body;
    removeButtonWrapper.addEventListener("click", function(event){
        //to make sure all removeButtons are detected it detects all clicks and continues if it is on #removeButton
        if(event.target.id == "removeButton"){
            //remove button pushed
            let targetElement = event.target;
            let table = document.body.querySelector("table");
            let assignment = targetElement.parentElement;
            let cell = assignment.parentElement;


            if(assignment.id.includes("Copy")){
                //shrink back to 1 cell to then replace missing ones before deletion
                cell.rowSpan = 1;

                for (let row of table.rows) {
                    if(row.cells[1] == undefined){
                        //insert at the end of the row
                        let newCell = row.insertCell(-1)

                        //add cell attributes
                        newCell.id = "calendarBox" + row.cells[0].innerHTML;
                        newCell.setAttribute("class", "holder");
                        newCell.setAttribute("ondrop", "drop(event)");
                        newCell.setAttribute("ondragover", "allowDrop(event)");
                    }
                }
            }

            if(assignment.style.display != "none" || assignment.className == "assignment"){
                assignment.remove()
            }
        }
    });
})

document.addEventListener('DOMContentLoaded', (event) => {
    const editButtonWrapper = document.body;
    editButtonWrapper.addEventListener("click", function(event){
        if(event.target.id == "editButton") {
            document.getElementById('removeButton').click();
            openPopup();
            // need to fill the text fields of the popup with the previously inputted information. 
            document.getElementById("Aname").value = Assignment.name;
            //document.getElementById("reading").checked = false;
            document.getElementById("Description").value = Assignment.description;
            document.getElementById("Ctime").value = Assignment.completionTime;
        }
    })
})

export function removeAssignment (assignment){
    //to make sure all removeButtons are detected it detects all clicks and continues if it is on #removeButton
    if(assignment.className == "assignment"){
        let table = document.body.querySelector("table");
        let assignment = targetElement.parentElement;
        let cell = assignment.parentElement;


        if(assignment.id.includes("Copy")){
            //shrink back to 1 cell to then replace missing ones before deletion
            cell.rowSpan = 1;

            for (let row of table.rows) {
                if(row.cells[1] == undefined){
                    //insert at the end of the row
                    let newCell = row.insertCell(-1)

                    //add cell attributes
                    newCell.id = "calendarBox" + row.cells[0].innerHTML;
                    newCell.setAttribute("class", "holder");
                    newCell.setAttribute("ondrop", "drop(event)");
                    newCell.setAttribute("ondragover", "allowDrop(event)");
                }
            }
        }

        if(assignment.style.display != "none" || assignment.className == "assignment"){
            assignment.remove()
        }
    }
}