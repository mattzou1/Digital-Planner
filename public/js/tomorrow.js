//import classes
import {User, Assignment, Event, weekdays, user1} from './classes.js'

//DOM is loaded
window.addEventListener("DOMContentLoaded", handler);

function handler(){ //event handler for after DOM is loaded
    //get the tomorrow button
    let tmrButton = document.querySelector("#tmrButton");

    //if tomorrow button is clicked
    tmrButton.addEventListener("click", function() {
        //get day of week
        let date = document.querySelector("#dayOfWeek");
        //console.log(user1.getTomorrow());

        //update date to tomorrow
        date.innerHTML = user1.getTomorrow();

        //update cal header
        let today = new Date();
        let day = today.getDate() + 1;
        let month = today.toLocaleString("default", { month: "long"});
        let year = today.getFullYear();

        let calheader = document.body.querySelector("#currentDate");
        calheader.innerHTML = `${month} ${day}, ${year}`;

        //clear all events from calendar
        //keep repeating events
        
    });

    //make button to go back to original date

    //get the back button
    let backButton = document.querySelector("#backButton");

    //if back button is clicked
    backButton.addEventListener("click", function() {
        //get day of week
        let date = document.querySelector("#dayOfWeek");

        //update date to today
        date.innerHTML = user1.getDayOfWeek();

        //update cal header
        let calheader = document.body.querySelector("#currentDate");
        calheader.innerHTML = user1.getFormattedDate();

        //get events back from calendar
        //keep repeating events
        
    });
}



//loop through entire week:
// for(let i = 0; i < 7; i++){
        //     let today = new Date();
        //     let dayOfWeek = weekdays[(today.getDay() + 1 + i) % 7];
        //     console.log(dayOfWeek);
        // }