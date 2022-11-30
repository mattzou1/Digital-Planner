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

    //if tomorrow button is clicked
    tmrButton.addEventListener("click", function() {
        //get day of week
        
        //console.log(user1.getTomorrow());

        //console.log(weekdays[num]);

        if(num > 6){
             num = -1;
        }

        //update date to tomorrow
        date.innerHTML = weekdays[nums[num + 1]];
        console.log(weekdays[nums[num + 1]]);

        num = num + 1;
    
        let newDate = today.setDate(today.getDate() + 1);
        today = new Date(newDate);
        console.log(today);

        let day = today.getDate();
        let month = today.toLocaleString("default", { month: "long"});
        let year = today.getFullYear();
        
        calheader.innerHTML = `${month} ${day}, ${year}`;

        console.log("num: " + num);
        //clear all events from calendar
        //keep repeating events
        
    });

    //get the back button
    let backButton = document.querySelector("#backButton");

    backButton.addEventListener("click", function() {
        // if(num < 7 && num > 0){
        //     num = num - 1;
        //     date.innerHTML = weekdays[num];
        //     console.log("num: " + num);
        //     console.log(weekdays[num]);
        // }

        //get nums
        //subtract num to get the previous day

        if(num === nums[0]){
            num = 7;
        }
        num = num - 1;
        console.log("num: " + num);
        console.log(weekdays[nums[num]]);
        date.innerHTML = weekdays[nums[num]];
        

        let newDate = today.setDate(today.getDate() - 1);
        today = new Date(newDate);
        console.log(today);

        let day = today.getDate();
        let month = today.toLocaleString("default", { month: "long"});
        let year = today.getFullYear();
        
        calheader.innerHTML = `${month} ${day}, ${year}`;

        //get events back from calendar
        //keep repeating events
        
    });

    let todayButton = document.querySelector("#todayButton");
    //get button for 'today'
    todayButton.addEventListener("click", function() {
        //update date to today
        date.innerHTML = user1.getDayOfWeek();
        
        //update cal header
        calheader.innerHTML = user1.getFormattedDate();
    });


}

//add button that takes user to 'today' if they scroll too far