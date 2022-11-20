//fills "start time" and "stop time" with times in 30 minute increments
//on the add assignment pop-up
//connects to copyToDo.html

import {increments} from "./increments.js"

//get dropdown menu for start time
let Stime = document.body.querySelector("#Stime")
increments(Stime);

//get dropdown menu for stop time
let Etime = document.body.querySelector("#Etime")
increments(Etime);