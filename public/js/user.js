class User{
    //use military time for startTime endTime
    constructor(username, password, startTime, endTime){
        this.username = username;
        this.password = password;
        this.startTime = startTime;
        this.endTime = endTime;
        this.schedule = new Map();                    //schedule for 1 day, may need to add more code if we want to view multiple days
        this.fillSchedule();
    }

    //fills schedule map with hours:minute as key and a string empty.
    //will eventually contain event or assignment object. 
    fillSchedule(){
        let increment = 30; 
        let time = this.startTime;
        while(time !== this.endTime){
            this.schedule.set(time, "empty");
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
        //console.log(this.schedule);
    }

    //Returns today's date in the format "Tuesday 11/1"
    getCurrentDate(){
        let weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
        let today = new Date();
        let day = today.getDate();
        let month = today.getMonth() + 1;
        let dayOfWeek = weekday[today.getDay()];
        return `${dayOfWeek} ${month}/${day}`; 
    }

    //function that fills schedule with and event or assignment from a startTime to endTime 
}

