import {User} from "./classes.js";
window.addEventListener("DOMContentLoaded", registerPostButtonListener);

function registerPostButtonListener() {
    let button = document.getElementById("createAccount");
    button.addEventListener("click", async function () {
        let username = document.getElementById("username");
        let password = document.getElementById("password");
        let startTime = document.getElementById("studyStart");
        let stopTime = document.getElementById("studyStop");
        let user = new User(username.value,password.value,startTime.value,stopTime.value);
        let url = "/signup"
        let response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        });
        //let result = await response.json();
        //console.log(result);
    });
}