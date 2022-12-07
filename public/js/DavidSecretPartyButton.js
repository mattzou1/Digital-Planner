document.addEventListener('DOMContentLoaded', (event) => {
    let submitAssButton = document.querySelector("#asmt");
    let cancel = document.querySelector(".cancelbtn")
    let add = document.querySelector(".addbtn")

    submitAssButton.addEventListener("click", function(event){
        const myButton = document.createElement("button");
        let container = document.querySelector(".container")
        let partyButton = container.appendChild(myButton)
        partyButton.setAttribute('style', 'top:100px; left:150px; height:100px; width:100px; zIndex:1000; position:absolute;');
        partyButton.id = "DavidParty"
        partyButton.style.backgroundColor = "#7db4eb"
        partyButton.style.marginLeft = "19%"
        partyButton.style.marginTop = "100%"
        partyButton.style.display = "block"
    })

    cancel.addEventListener("click", function(event){
        let partyButton = document.querySelector("#DavidParty")
        partyButton.style.display = "none"
    })

    add.addEventListener("click", function(event){
        let partyButton = document.querySelector("#DavidParty")
        partyButton.style.display = "none"
    })

    //NOT DETECTING CLOSE BUTTONS AFTER FIRST POPUP IS GONE
})