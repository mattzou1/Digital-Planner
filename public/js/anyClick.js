//import {currentUser} from "./login.js";

import {User,user1,Assignment, Event, weekdays} from "./classes.js";

document.addEventListener('DOMContentLoaded', (event) => {

    const click = document.body;
    click.addEventListener("click", function(event){
        //to make sure all removeButtons are detected it detects all clicks and continues if it is on #removeButton
        if(event.target.id == "removeButton" || event.target.id == "editButton"){
            //remove button pushed
            let targetElement = event.target;
            let table = document.body.querySelector("table");
            let assignment = targetElement.parentElement;
            let cell = assignment.parentElement;

            if(assignment.id.includes("Copy") || assignment.className == "event"){
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

            //if it is in the todo list, not the calander
            if(assignment.style.display != "none" || assignment.className == "assignment"){
                assignment.remove()
                let idIndex = assignment.id
                let index = idIndex.match(/(\d+)/);
                index = index[0]
                delete user1.assignments[index]
            }
        }


        //cycle through looking for incorrectly sized assignments and sizing them correctly
        let table = document.body.querySelector("table")
        for(let i = 0; i < table.rows.length; i++){
            try{
                if(table.rows[i].cells[1].children.length > 0){
                    let assignmentID = table.rows[i].cells[1].firstChild.id
                    //get child with time
                    let minutesChild = document.body.querySelector('#' + assignmentID + ' :nth-child(5)')

                    //Extract length of assignments
                    let cellLengthStr = minutesChild.innerHTML
                    let length = cellLengthStr.match(/(\d+)/);

                    //Because at the moment you can set length to nothing or 0
                    if(length != null && length.length > 0) {
                        length = length[0];
                    }

                    //find length in cells, not minutes
                    length /= 30;

                    //there really shouldn't be a 0 length so will be set to 1 (or 30) for now
                    if(length == 0){
                        length = 1;
                    }

                    if(length > 1){
                        //if in bounds remove cell(s) below one just added (if needed)
                        for(let j = 1; j < length; j++){
                            //check and see which cells are being "deleted" (need to delete instead of add later)
                                table.rows[i + j].deleteCell(1);
                        }
                    }

                    //change the span so it taked up empty space
                    if(table.rows[i].cells[1].rowSpan != length){
                        table.rows[i].cells[1].rowSpan = length
                    }
                }
            }
            catch{
                console.error("Drag top of assignment")
            }
        }

    });
})

document.addEventListener('DOMContentLoaded', (event) => {
    const editButtonWrapper = document.body;
    editButtonWrapper.addEventListener("click", function(event){
        if(event.target.id == "editButton") {
            openPopup();
            // need to fill the text fields of the popup with the previously inputted information. 
            document.getElementById("Aname").value = currentUser.assignments[0].name;
            document.getElementById("reading").checked = false;
            document.getElementById("Description").value = currentUser.assignments[0].description;
            document.getElementById("Ctime").value = currentUser.assignments[0].completionTime;
        }
    })
})
