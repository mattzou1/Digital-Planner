document.addEventListener('DOMContentLoaded', (event) => {

    const removeButtonWrapper = document.body;
    removeButtonWrapper.addEventListener("click", function(event){
        //to make sure all removeButtons are detected it detects all clicks and continues if it is on #removeButton
        if(event.target.id == "removeButton"){
            console.log("clicked")
            let targetElement = event.target
            let holder = targetElement.parentElement.parentElement;
            let children = holder.children
            for(let i = 0; i < children.length; i++){
                //if the item assignment is visible only remove that one (not the one hidden in the same spot)
                if(children[i].style.display == "block"){
                    console.log("removed")
                    children[i].remove()
                }
            }
        }
    });
})