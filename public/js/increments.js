
//function that fills dropdown menu with times in 30 minute increments
export function increments(select){
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