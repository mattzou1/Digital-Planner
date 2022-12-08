//import classes
import {weekdays, currentUser, getUser, getFormattedDate} from './classes.js'

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
    let num = today.getDay();

    //if tomorrow button is clicked
    tmrButton.addEventListener("click", function() {
        //hideAss();
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

        //console.log("month: " + day);
        //console.log("year: " + day);
        
        calheader.innerHTML = `${month} ${day}, ${year}`;

        //remove assignments on the current day
        clearAssignments();
       
        console.log(getFormattedDate());
        console.log(calheader.innerHTML);

        // //if you're on today's date, show assignments
        // if(calheader.innerHTML === getFormattedDate()){
        //     console.log("Hi!");
        //     showAss();
        // }
        // else{
        //     hideAss();
        //     console.log("hide");
        // }
        
    });

    //get the back button
    let backButton = document.querySelector("#backButton");

    backButton.addEventListener("click", function() {
        //hideAss();
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
        clearAssignments();

        console.log(getFormattedDate());
        console.log(calheader.innerHTML);
        
        //if you're on today's date, show assignments
        // if(calheader.innerHTML === getFormattedDate()){
        //     console.log("Hi!");
        //     showAss();
        // }
        // else{
        //     hideAss();
        //     console.log("hide");
        // }
        
    });

    let todayButton = document.querySelector("#todayButton");
    //get button for 'today'
    todayButton.addEventListener("click", function() {
        
        //clearToDo();

    //     ///console.log("storeToday2: " + storeToday2);

    //     //update date to today
    //     date.innerHTML = user1.getDayOfWeek();
        
    //     //update cal header
    //     calheader.innerHTML = user1.getFormattedDate();

    //     num = storeToday; //rest num to the current day of week number
    //     ///console.log("should be 3: " + num);

    //     //today.setDate(storeToday);
    //     //console.log("today.getDate: " + today.getDate());

    //     //let newDate = today.setDate(storeToday2);
    //     today = new Date(storeToday2 - 1);
    //     ///console.log("today: " + today);


    });

    //hide Calendar test
    // function hideAss(){
    //     let counter = 0;
    //     let assignment2 = document.getElementById("assignment" + counter + "Copy" + (counter + 1));
    //     assignment2.classList.add('hideAss');

    //     //add table to 'removeCal' class, which hides the table
    //     //table.classList.add('removeCal');

    //     //add a new table element
    //     //let newTable = table.cloneNode(true);
    //     // let newTable = document.createElement("#table");
    //     // let newRow = document.createElement();
    //     // let box = document.body.querySelector("#calendar");
    //     // box.appendChild(newTable);
    //     // //newTable.innerHTML = "Hi there!"
    //     // newTable.id = "newTable";

    // }

    // function showAss(){
    //     let counter = 0;
    //     let assignment2 = document.getElementById("assignment" + counter + "Copy" + (counter + 1));
    //     assignment2.classList.add('showAss');
    // }

    //remove assignments on the current day
    function clearAssignments(){
        //let counter = 0;
        //get number of rows
        
        for (let i = 0; i < 10; i++) {
            let assignment2 = document.querySelector("#assignment" + i + "Copy" + (i + 1));
            for(let counter = 0; counter < 5; counter++){
                console.log(assignment2);
                if(assignment2.id !== "null"){
                    assignment2.remove();
                }
                console.log(counter);
            } 
            console.log("i: " + i);
        }
        //for (let [time] of user1.schedule) {
            //if it is in the todo list, not the calander
            //let assignment2 = document.getElementById("assignment" + counter + "Copy" + (counter + 1));
            //if(assignment2.className == "assignment"){
                //assignment2.remove();
                // let idIndex = assignment2.id;
                // let index = idIndex.match(/(\d+)/);
                // index = index[0];
                // delete user1.assignments[index]

                //console.log(user1.assignments);
                //make hide and show features?
                //when date changes --> hide assignments
                //when today clicked --> show assignments

                //counter++;
            //}
    }


}

//add button that takes user to 'today' if they scroll too far