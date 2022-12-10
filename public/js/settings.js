import {User} from "./classes.js";

//load dom
//get submit button
//listen for click of submit button
//if something changed...
    //get username, pw, start and stop time
    //update all this info 

    window.addEventListener("DOMContentLoaded", buttonHandler()); //load the DOM

    function buttonHandler(){
        //gets the submit button from settings page
        let submitButton = document.body.querySelector("#submitButton"); 

        //if submit button is clicked, call submitHandler()
        submitButton.addEventListener("click", async function(){
            
            //TEST 
            console.log("submit was just clicked");
            
            //gets all the data that user has the option of updating
            let username = document.getElementById("changeUsername"); //gets the username
            let password = document.getElementById("changePassword"); //gets the password
            let startTime = document.getElementById("startWorkTime");//gets the start time
            let stopTime = document.getElementById("stopWorkTime");//gets the stop time
            
            console.log("new username will be: " + username.value);

            //if user did not update anything and clicked submit, nothing should get updated
            if (username.value == "" && password.value == ""){
            //get the current username
            //update the value
            alert("No username or password given!");
            }
            else{
                let user = localStorage.getItem("user"); //get the user

                let parsed = JSON.parse(user);
                let newUsername = username.value;
                let newPassword = password.value;

                let url = "/changeuser";
                let response = await fetch(url, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({parsed,newUsername,newPassword})
                });

                let result = await response.text(); 

                console.log("the result is: " + result);
                
                if(result == "true"){
                    console.log("meow!");
                    window.localStorage.setItem("user", JSON.stringify(user));
                }

                // console.log("Going to change something...");

                // console.log("new user is: " + username.value);

                // let theUser = localStorage.getItem("user"); //get the JSON object
                // console.log(theUser); //print it out as TEST

                // //=================
                // let theUserObj = JSON.parse(theUser); //parse
                // console.log("print out parsed: " + theUserObj); //print out parsed

                // theUserObj.username = username.value; //change the username to the new one
                
                // theUser = JSON.stringify(theUserObj);
                // console.log("print out updated theUser: " + theUser);

                // window.localStorage.setItem("user", JSON.stringify(theUser)); //set it back to local storage

                // let changedUser = window.localStorage.getItem("user");
                // console.log("changedUser: " + changedUser);
                // //=======================


//-----------------------------------


                // let parsed = JSON.parse(theUser); //parse it
                // let user_name = parsed.username;
                // console.log("The username associated w this account is: " + user_name);

                // console.log("here is parsed: " + parsed);

                // if(user_name = currUser){
                //     theUser = JSON.stringify(username);
                // }
                
                // // for (let i = 0; i < parsed.length; i++){
                // //     if(user_name = currUser){
                // //         parsed.username = username;
                // //     }
                // // }
                
                // console.log("here is hopefully changed theUser...");
                // console.log(theUser);
                // //change the username to whatever
            //}
       // });
    }


    });
}
