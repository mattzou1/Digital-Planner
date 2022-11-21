document.addEventListener('DOMContentLoaded', (event) => {

    const removeButtonWrapper = document.body;
    removeButtonWrapper.addEventListener("click", function(event){
        //to make sure all removeButtons are detected it detects all clicks and continues if it is on #removeButton
        if(event.target.id == "removeButton"){
            //remove button pushed
            let targetElement = event.target
            let assignment = targetElement.parentElement;

            if(assignment.style.display != "none" || assignment.className == "assignment"){
                assignment.remove()
            }
        }
    });
})