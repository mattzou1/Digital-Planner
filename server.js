/*
    The most basic Express web server running locally
*/

const express = require("express"); 
const fs = require('fs');


// Creates an Express application: https://expressjs.com/en/4x/api.html#app
// Returns the Express application object
const app = express();
const port = 3000;

// Tell express where to find your CSS, JS, and images
app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/js', express.static(__dirname + 'public/js'));
app.use('/img', express.static(__dirname + 'public/img'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// A route definition
app.get("/", (req, res) => {
    res.sendFile(__dirname + '/views/login_or_signup.html');
});

//creates new tab need to fix 
app.get("/home", (req, res) => {
    res.sendFile(__dirname + '/views/copyToDo.html');
});

app.post("/login", (req, res) => {
    let username = req.body.username;
    let password = req.body.password; 
    fs.readFile('./userDatabase.json', 'utf8', (err, data) => {
        if (err) {
          console.log(`Error reading file from disk: ${err}`)
        } 
        else {
            // parse JSON string to JSON object
            const databases = JSON.parse(data)
            let userdata = "false"; 
            for(let user of databases){
                if(user.username == username && user.password == password){
                    userdata = user; 
                }
            }
            res.send(userdata);
        }
    })
});

app.post("/changeuser", (req, res) => {
    user = req.body;

    fs.readFile('./userDatabase.json', 'utf8', (err, data) => {
        if (err){
            console.log("Error.");
        }
        else{
            const parsed = JSON.parse(data); //parse data

            console.log("parsed is: " + parsed);

            let match = "false";

            for(let userdata of parsed){
                //check that you are looking at the correct/current user
                if(userdata.username == user.username){
                    match = "true";
                    //delete the username
                    delete parsed.username;
                }
            }

            if (match == "true"){
                //write back
                fs.writeFile('./userDatabase.json', JSON.stringify(databases, null, 4), err => {
                    if (err) {
                        console.log("Error deleting.");
                    }
                });
            }
            console.log(match)
            res.send(match);

        }
    });


});

app.post("/createuser", (req, res) => {
    user = req.body; 
    fs.readFile('./userDatabase.json', 'utf8', (err, data) => {
        if (err) {
          console.log(`Error reading file from disk: ${err}`)
        } 
        else {
            // parse JSON string to JSON object
            const databases = JSON.parse(data)
            let boo = "true";
            for(let userdata of databases){
                if(userdata.username == user.username){
                    boo = "false";
                }
            }
            if(boo == "true"){
                // add a new record
                databases.push(user);
                //console.log(databases);
      
                // write new data back to the file
                fs.writeFile('./userDatabase.json', JSON.stringify(databases, null, 4), err => {
                    if (err) {
                        console.log(`Error writing file: ${err}`)
                    }
                })
            }
            res.send(boo);
        }
    })
});

app.get("/signup", (req, res) => {
    res.sendFile(__dirname + '/views/signup.html');
});

app.get("/settings", (req, res, html) => {
    res.sendFile(__dirname + '/views/settings.html');
})

// starts web server listening on localhost at port 3000
app.listen(port, () => {
    console.log('Listening on port 3000...');
});
