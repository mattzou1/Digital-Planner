import {User} from "./classes.js";
window.addEventListener("DOMContentLoaded", registerPostButtonListener);

function registerPostButtonListener() {
    let button = document.getElementById("createAccount");
    button.addEventListener("click", async function (event) {
        event.preventDefault();
        let username = document.getElementById("changeUsername");
        let password = document.getElementById("changePassword");
        let startTime = document.getElementById("studyStart");
        let stopTime = document.getElementById("studyStop");
        let user = new User(username.value,password.value,startTime.value,stopTime.value);
        user.scheduleKeys = Array.from(user.schedule.keys());
        user.scheduleValues = Array.from(user.schedule.values());

        let url = "/createuser"
        let response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        });
        let result = await response.text(); 

        if(result == "true"){
            window.localStorage.setItem("user", JSON.stringify(user));
            window.location.replace("/home");
        }
        else{
            window.alert("Username already taken");
        }
    });
}