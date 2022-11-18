document.addEventListener('DOMContentLoaded', (event) => {

    const removeButtonWrapper = document.body;
    removeButtonWrapper.addEventListener("click", function(event){
        //to make sure all removeButtons are detected it detects all clicks and continues if it is on #removeButton
        if(event.target.id == "removeButton"){
            //remove button pushed
            let targetElement = event.target
            console.log("Button is " + targetElement)
            console.log("Button parent is " + targetElement.parentElement)
            console.log("button parent parent is " + targetElement.parentElement.parentElement)
            let holder = targetElement.parentElement.parentElement;
            let children = holder.children
            for(let i = 0; i < children.length; i++){
                console.log("child is " + children[i].id)
                console.log("child display type is: " + children[i].style.display)
                //if the item assignment is visible only remove that one (not the one hidden in the same spot)
                if(children[i].style.display == "block" || children[i].style.display == ""){
                    console.log("Display is block... Removing")
                    children[i].remove()
                }
            }
        }
    });
})