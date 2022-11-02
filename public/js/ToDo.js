
function shortcuts(){
    let assignments = document.body.querySelectorAll("#assignment");
    let shortcuts = document.body.querySelectorAll("#shortcut");

    //if(assignments[0].style.display != "none"){
        //hide assignments
        for(let i = 0; i < assignments.length; i++){
            assignments[i].style.display = "none";
        }

        //show shortcuts
        for(let i = 0; i < shortcuts.length; i++){
            shortcuts[i].style.display = "block";
        }
    //}   
}

function assignments(){
        let shortcuts = document.body.querySelectorAll("#shortcut");
        let assignments = document.body.querySelectorAll("#assignment");


       // if(shortcuts[0].style.display != "none"){
        //hide shortcuts
        for(let i = 0; i < shortcuts.length; i++){
            shortcuts[i].style.display = "none";
        }

        //show assignments
        for(let i = 0; i < assignments.length; i++){
            assignments[i].style.display = "block";
        }
    //}
}