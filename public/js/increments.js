
//function that fills dropdown menu with times in 30 minute increments
export function increments(select){
    for(let i = 1; i < 13; i++){
        //create two option elements
        let newOption = document.createElement("option");
        let newOption2 = document.createElement("option");
    
        //set new option elements to the time 
        let number = i + ":00"
        newOption.innerText = number;
        let number2 = i + ":30";
        newOption2.innerText = number2;
        
        //set value attribute of new option elements
        newOption.setAttribute("value", number);
        newOption2.setAttribute("value", number2);

        //console.log("Value: " + newOption.getAttribute("value"));
        //console.log("Value: " + newOption2.getAttribute("value"));

        //append options to dropdown menu
        select.appendChild(newOption);
        select.appendChild(newOption2);
    }

}