//fills "earliest work time" and "latest work time" with times in 30 minute increments
//on the settings page

import {increments} from "./increments.js"

//get dropdown menu for earliest work time
let startWorkTime = document.body.querySelector("#startWorkTime")
increments(startWorkTime);

//get dropdown menu for latest work time
let stopWorkTime = document.body.querySelector("#stopWorkTime")
increments(stopWorkTime);