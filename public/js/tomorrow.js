//import classes
import {User, Assignment, Event, weekdays, user1} from './classes.js'

//DOM is loaded
window.addEventListener("DOMContentLoaded", handler);

function handler(){ //event handler for after DOM is loaded
    //get the tomorrow button
    let tmrButton = document.querySelector("#tmrButton");

    let date = document.querySelector("#dayOfWeek");

    let today = new Date();
    let num = today.getDay() + 1;

    //if tomorrow button is clicked
    tmrButton.addEventListener("click", function() {
        //get day of week
        
        //console.log(user1.getTomorrow());

        //console.log(weekdays[num]);
        //update date to tomorrow
        date.innerHTML = weekdays[num];
        console.log(weekdays[num]);

        num = num + 1;
        
        if(num > 6){
            num = 0;
        }

        // let today = new Date();
        // date.innerHTML = user1.getTomorrow(today);
    
        let newDate = today.setDate(today.getDate() + 1);
        today = new Date(newDate);
        console.log(today);

        let day = today.getDate();
        let month = today.toLocaleString("default", { month: "long"});
        let year = today.getFullYear();
        
        let calheader = document.body.querySelector("#currentDate");
        calheader.innerHTML = `${month} ${day}, ${year}`;

        //clear all events from calendar
        //keep repeating events
        
    });

    //make 'back' button to go back to original date

    //get the back button
    let backButton = document.querySelector("#backButton");
    
    //num = num - 1;
    //if back button is clicked
    //back button just goes back to today's date
    backButton.addEventListener("click", function() {
        //update date to today
        date.innerHTML = user1.getDayOfWeek();
        
        //update cal header
        let calheader = document.body.querySelector("#currentDate");
        calheader.innerHTML = user1.getFormattedDate();

        //Work in Progress:
        // num = num - 1;
        // console.log("num: " + num);

        // let date = document.querySelector("#dayOfWeek");

        // if(num === 0){
        //     //add to num
        //     num = num + 1;

        //     //update date to today
        //     date.innerHTML = weekdays[num];

        //     num = 6;
        // }
        // else if(num > 0){
        //     //subtract from num
        //     //get whatever day user scrolled to
        //     //console.log("day scrolled to: " + weekdays[num]);

        //     //go back by one day
        //     num = num - 1;
        //     console.log("new num: " + num);

        //     //update date
        //     date.innerHTML = weekdays[num];
        //     console.log("weekday: " + weekdays[num]);

        //     if(num <= 0){
        //         num = 7;
        //     }
        // }

        //get events back from calendar
        //keep repeating events
        
    });
}

//go forward more than one day
//add button that takes user to 'today' if they scroll too far

//for button 'today':
    // //update date to today
    // date.innerHTML = user1.getDayOfWeek();
        
    // //update cal header
    // let calheader = document.body.querySelector("#currentDate");
    // calheader.innerHTML = user1.getFormattedDate();

//loop through entire week:
// for(let i = 0; i < 7; i++){
        //     let today = new Date();
        //     let dayOfWeek = weekdays[(today.getDay() + 1 + i) % 7];
        //     console.log(dayOfWeek);
        // }