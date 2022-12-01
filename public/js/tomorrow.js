//import classes
import {User, Assignment, Event, weekdays, user1} from './classes.js'

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
    // let storeToday = today.getDay();
    // let storeToday2 = today;
    ///console.log("storeToday2" + storeToday2);

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

        //console.log("month: " + day);
        //console.log("year: " + day);
        
        calheader.innerHTML = `${month} ${day}, ${year}`;

        ///console.log("today: " + today);
        //console.log("num: " + num);
        //clear all events from calendar
        //keep repeating events
        ///console.log("num: " + num);
    });

    //get the back button
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

        //get events back from calendar
        //keep repeating events
        
    });

    // let todayButton = document.querySelector("#todayButton");
    // //get button for 'today'
    // todayButton.addEventListener("click", function() {

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


    // });


}

//add button that takes user to 'today' if they scroll too far