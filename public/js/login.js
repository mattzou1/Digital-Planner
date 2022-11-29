import {User} from "./classes.js";
window.addEventListener("DOMContentLoaded", registerPostButtonListener);

function registerPostButtonListener() {
    let button = document.getElementById("submit");
    button.addEventListener("click", async function (event) {
        event.preventDefault();
        let username = document.getElementById("userName");
        let password = document.getElementById("password");
        let url = "/login"
        let response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({username: document.getElementById("userName").value, password: document.getElementById("password").value})
        });
        let result = await response.text(); 
        result = JSON.parse(result);
        if(result == false){
            window.alert("Invalid username and password");
        }
        else{
            //create user data from json
            let user = result; 
            window.location.replace("/home");
            
        }
    });
}