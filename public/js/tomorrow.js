//import classes
import {weekdays, currentUser, getUser, getFormattedDate, getDayOfWeek} from './classes.js'

getUser(currentUser);
let user1 = currentUser;

//DOM is loaded
window.addEventListener("DOMContentLoaded", handler);

function handler(){ //event handler for after DOM is loaded
    //get the tomorrow button
    let tmrButton = document.querySelector("#tmrButton");

    let date = document.querySelector("#dayOfWeek");

    let calheader = document.body.querySelector("#currentDate");

    //create array
    let nums = [0,1,2,3,4,5,6];
    //0 is Sunday... 6 is Saturday

    let today = new Date();
    let storeToday = today.getDate();
    //console.log(today);
    let num = today.getDay();
    let storeNum = num;
    //console.log(num);

    //variable to make sure clearing assignments only happens one time
    let callTmrOnce = 0;
    let callBackOnce = 0;

    //used to store return value from clearAssignments();
    let returnClearAss = null;

    //if tomorrow button is clicked
    tmrButton.addEventListener("click", function() {
        //get day of week
        
        if(num > 5){
             num = -1;
        }

        num = num + 1;

        //update date to tomorrow
        date.innerHTML = weekdays[nums[num]];

        let newDate = today.setDate(today.getDate() + 1);
        today = new Date(newDate);
        //change today to be the next day 
        //today.setDate(today.getDate() + 1);

        let day = today.getDate();
        //console.log("day: " + day);
        let month = today.toLocaleString("default", { month: "long"});
        let year = today.getFullYear();
        
        calheader.innerHTML = `${month} ${day}, ${year}`;

        clearAssignments();
        //remove assignments on the current day
        //if(callTmrOnce == 0){
            //returnClearAss = clearAssignments();
            //console.log("hello");
        //}

        //callTmrOnce++;
        //get assignments back if user manually scrolls to today's date
        // if(calheader.innerHTML === getFormattedDate()){
        //     console.log(returnClearAss);

        //     //split array in half (lower half for assignments, upper half for parents)
        //     let assignments = returnClearAss.splice(0, returnClearAss.length / 2);
        //     let parents = returnClearAss.splice((returnClearAss.length / 2) - 1);

        //     console.log(assignments);
        //     console.log(parents);

        //     for(let i = 0; i < assignments.length; i++){
        //         //get an assignment
        //         let firstAss = assignments[i];
        //         //console.log(firstAss);
            
        //         //get parent of that assignment
        //         let firstParent = parents[i];
        //         //console.log(firstParent);

        //         //append assignment to parent to add it back to calendar
        //         firstParent.appendChild(firstAss);
        //     }
        // }
       
    });

    //get the 'back' button
    let backButton = document.querySelector("#backButton");

    backButton.addEventListener("click", function() {
        //get nums
        //subtract num to get the previous day

        if(num === nums[0]){
            num = 7;
        }
        num = num - 1;
        ///console.log("num: " + num);
        ///console.log(weekdays[nums[num]]);
        date.innerHTML = weekdays[nums[num]];
        
        let newDate = today.setDate(today.getDate() - 1);
        today = new Date(newDate);
        //today.setDate(today.getDate() - 1);
        ///console.log(today);

        let day = today.getDate();
        let month = today.toLocaleString("default", { month: "long"});
        let year = today.getFullYear();
        
        calheader.innerHTML = `${month} ${day}, ${year}`;

        //remove assignments from today
        //remove assignments on the current day
        // if(callBackOnce == 0){
        //     clearAssignments();
        //     //console.log("hi");
        // }
        // callBackOnce++;

        clearAssignments();

        //let test = clearAssignments();
        //console.log(test);

    });

    //get button for 'today'
    let todayButton = document.querySelector("#todayButton");
    //if today clicked, update calendar headers to today's date
    todayButton.addEventListener("click", function() {
        //update date to today
        date.innerHTML = getDayOfWeek();
        
        //update cal header
        calheader.innerHTML = getFormattedDate();

        num = storeNum; //re-set num to the current day of week number
        //console.log("should be 4: " + num);

        //console.log(storeToday);
        today.setDate(storeToday);
        //console.log("today.getDate: " + today.getDate());
       
    });

    //remove assignments when user goes past the current day
    function clearAssignments(){
        //get any assignments with an id that contains "Copy" (which means they are on the calendar)
        let assignment = document.querySelectorAll(`[id*="Copy"]`);

        //store the assignments currently on calendar for today's date
        //create copy of assignment
        let copy = document.querySelectorAll(`[id*="Copy"]`);
        
        //copy2 holds the assignments on the calendar
        //will holds assignments and their parents, which will later be returned by this function
        //let copy2 = copy;
        //convert NodeList into array
        // let copyArray = Array.prototype.slice(copy)
       
        // //push assignments onto copyArray
        // for(let i = 0; i < copy.length; i ++){
        //     let parent = copy[i];
        //     copyArray.push(parent);  
        // }

        //create array to store parent nodes of the assignments
        let storeParents = [];
        for(let i = 0; i < copy.length; i ++){
            let parent = copy[i].parentNode;
            storeParents.push(parent);

            //also push parents of assignments onto copyArray
            //copyArray.push(parent);  
        }

        //if assignments exist, remove them
        if(assignment !== "null"){
            //cycle through each element, and remove it from the calendar
            assignment.forEach(ass => {
                if(ass.parentNode.rowSpan > 1){
                    //console.log(ass.parentNode.rowSpan);
                    ass.parentNode.setAttribute("rowSpan", 1);
                    //console.log("new rowspan: " + ass.parentNode.rowSpan);
                    //make cells beneath it have rowspan of 1 as well
                }
                //remove the assignments
                ass.remove();

                //resize any cells that are not sized properly
                let table = document.body.querySelector("table");
                for (let row of table.rows) {
                    //if any cells were removed when assignment was deleted
                    if(row.cells[1] == undefined){
                        //insert a cell at the end of the row
                        let newCell = row.insertCell(-1)

                        //add cell attributes to make it a holder for assignments
                        newCell.id = "calendarBox" + row.cells[0].innerHTML;
                        newCell.setAttribute("class", "holder");
                        newCell.setAttribute("ondrop", "drop(event)");
                        newCell.setAttribute("ondragover", "allowDrop(event)");
                    }
                }
            });
        }

        //get button for 'today'
        //let todayButton = document.querySelector("#todayButton");
        //if today button pushed, add assignments for current date back to calendar

        todayButton.addEventListener("click", function() {
            for(let i = 0; i < copy.length; i++){
                //get an assignment
                let firstAss = copy[i];
            
                //get parent of that assignment
                let firstParent = storeParents[i];

                //firstParent.setAttribute("rowSpan", firstParent.rowSpan);
                //console.log(firstParent.rowSpan);

                //append assignment to parent to add it back to calendar
                firstParent.appendChild(firstAss);
                //console.log(copy.length);
            }
        });

        //return copyArray;
        
    }

    // function bringAssBack(){
    //     //if user scrolls back to today's date, bring assignments back
    //     if(calheader.innerHTML === getFormattedDate()){
    //         console.log("Hiya, back!");
    //    }
    // }

}