export let weekdays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

//All times should be a string using miltary time with minutes as 00 or 30 for example "14:30"
//user class containing user information and schedule for one day
export class User{    
    constructor(username, password, startTime, endTime){
        this.username = username;
        this.password = password;
        this.startTime = startTime;
        this.endTime = endTime;
        this.assignments = [];
        this.schedule = new Map();                              //schedule for 1 day, may need to add more code if we want to view multiple days
        this.addElement(this.startTime,this.endTime, "empty");  //fills schedule map with hours:minute as key and a string empty.
    }

    //Returns user's start time
    getStartTime(){
        return this.startTime;
    }

    //Returns user's end time
    getEndTime(){
        return this.endTime;
    }

    //Returns today's date in the format "Tuesday 11/1"
    getCurrentDate(){
        let today = new Date();
        let day = today.getDate();
        let month = today.getMonth() + 1;
        let dayOfWeek = weekdays[today.getDay()];
        return `${dayOfWeek} ${month}/${day}`; 
    }

    //function that returns the date in "Month Day, Year" format
    getFormattedDate(){
        let today = new Date();
        let day = today.getDate();
        let month = today.toLocaleString("default", { month: "long"});
        let year = today.getFullYear();
        return `${month} ${day}, ${year}`;
    }

    //function that returns the current day of the week
    getDayOfWeek(){
        let today = new Date();
        let dayOfWeek = weekdays[today.getDay()];
        return dayOfWeek;
    }

    //function that clears schedule 
    clearSchedule(){
        this.schedule.clear();
    }

    //function that fills schedule with and event or assignment from a startTime to endTime 
    addElement(startTime, endTime, element){
        let increment = 30; 
        let time = startTime;
        while(time != endTime){
            this.schedule.set(time, element);
            let hours = parseInt(time.substring(0,time.indexOf(":")));
            let minutes = parseInt(time.substring(time.indexOf(":") + 1));
            minutes += increment; 
            if(minutes >= 60){
                hours += 1;
                minutes = 0; 
            }
            if(minutes == 0){
                time = `${hours}:${minutes}0`;
            }
            else{
                time = `${hours}:${minutes}`;
            }
        }
    }
}

//Assignment class for making assignments
export class Assignment{
    //shortcut should be boolean 
    constructor(name, description, completionTime/*, shortcut*/){
        this.name = name;
        this.description = description;
        //completion time is the time it will take the user to complete the assignment,
        //which they enter themselves
        this.completionTime = completionTime;
            //this.shortcut = shor tcut; 
        this.ifDragged = false; 
    } 
}

//Event class for making events

export class Event{
    //reocuring should be an boolean array corresponding to ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"] 
    constructor(name, description, startTime, stopTime, reoccuring){
        this.name = name;
        this.description = description;
        this.startTime = startTime;
        this.stopTime = stopTime;
        this.reoccuringDays = new Map();
        for(let i in weekdays){
            this.reoccuringDays.set(weekdays[i], reoccuring[i]);
        }
    } 
}

export let user1 = new User("Bob", "123", "9:30", "12:30");


//exports the classes so we can use them in other js files
//module.exports.User = User;
// module.exports.Assignment = Assignment;
// module.exports.Event = Event;



//to import them, do:
    //let classes = require("./classes.js");
    //and then access the classes with classes.User, classes.Assignment, etc
    //let user1 = new classes.User(1,1,"9:30", "13:00");