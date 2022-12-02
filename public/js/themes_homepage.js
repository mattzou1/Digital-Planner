
//check if local storage has dark mode
    //do this by getting from local storage the key value pairs
        //if dark mode is "on"...
//make the theme dark
if (localStorage.getItem("dark") == "on"){ //if localstorage has the value "on" for "dark" key...
    document.body.classList.toggle('dark');  //toggle to dark mode
}

