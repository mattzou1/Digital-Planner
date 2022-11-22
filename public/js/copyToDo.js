//let User = require("js/User.js");
import {User,user1,Assignment, Event} from "./classes.js";

document.addEventListener('DOMContentLoaded', (event) => {
    //check and see if "holder" boxes are empty and set make them droppaple if they are
    function determineDraggable(){
        let holders = document.body.querySelectorAll(".holder");
        //check each holder
        for(let i = 0; i < holders.length; i++){
            if(holders[i].hasChildNodes()){
                holders[i].setAttribute("ondragover", "");
            }
            else{
                holders[i].setAttribute("ondragover", "allowDrop(event)")
            }
        }
    }

})