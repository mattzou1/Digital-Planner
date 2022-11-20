//fills "study start" and "study stop" with times in 30 minute increments
//on the sign up page

import {increments} from "./increments.js"

//get dropdown menu for study start time
let studyStart = document.body.querySelector("#studyStart")
increments(studyStart);

//get dropdown menu for study stop time
let studyStop = document.body.querySelector("#studyStop")
increments(studyStop);