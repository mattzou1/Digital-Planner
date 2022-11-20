
//function that fills dropdown menu with times in 30 minute increments
function increments(select){
    for(let i = 1; i < 13; i++){
        //create two option elements
        let newOption = document.createElement("option");
        let newOption2 = document.createElement("option");
    
        //set new option elements to the time 
        newOption.innerText = i + ":00";
        newOption2.innerText = i + ":30";
    
        //append options to dropdown menus
        select.appendChild(newOption);
        select.appendChild(newOption2);
    }

}


//get dropdown menu for study start time from signup page
let studyStart = document.body.querySelector("#studyStart")
increments(studyStart)

//get dropdown menu for study stop time from signup page
let studyStop = document.body.querySelector("#studyStop")
increments(studyStop);