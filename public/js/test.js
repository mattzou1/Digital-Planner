import {User,user1,Assignment, Event} from "./classes.js";


let table = document.body.querySelector("tbody"); //get body

//loop through each key in the map
for (let [time] of user1.schedule){
    //console.log(time);
       
    let row = table.insertRow(-1); //insert a row
    row.classList.add("expand");
    let cell1 = row.insertCell(0); //create a cell
       
    cell1.innerHTML = time; //set the time to that cell
      
}






// //create user
    // let user1 = new User(1,1,"9:30", "13:00");
    // console.log(user1.schedule);

    // let table = document.body.querySelector("tbody"); //get body

    // //loop through each key in the map
    // for (let [time] of schedule){
    //     console.log(time);
       
    //     let row = table.insertRow(-1); //insert a row
    //     let cell1 = row.insertCell(0); //create a cell
       
    //     cell1.innerHTML = time; //set the time to that cell
      
    // }