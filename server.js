/*
    The most basic Express web server running locally
*/

const express = require("express");
const bcypt = require('bcrypt'); 


// Creates an Express application: https://expressjs.com/en/4x/api.html#app
// Returns the Express application object
const app = express();
const port = 3000;

// Tell express where to find your CSS, JS, and images
app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/js', express.static(__dirname + 'public/js'));
app.use('/img', express.static(__dirname + 'public/img'));


// A route definition
app.get("/", (req, res) => {
    res.sendFile(__dirname + '/views/login_or_signup.html');
});

//creates new tab need to fix 
app.post("/home", (req, res) => {
    res.sendFile(__dirname + '/views/copyToDo.html');
});

app.get("/signup", (req, res) => {
    res.sendFile(__dirname + '/views/signup.html');
});

app.get("/settings", (req, res, html) => {
    res.sendFile(__dirname + '/views/settings.html');
})

app.use(express.json());
const users = [];

app.get('/users', (req, res) => {
    res.json(users);
})

app.post('/users', async(req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const user = { name: req.body.name, password: hashedPassword };
        users.push(user);
        res.status(201).send();
    }
    catch {
        res.status(500).send();
    }
})

app.post('/users/login', async (req, res) => {
    const user = users.find(user => user.name === req.body.name)
    if (user == null) {
      return res.status(400).send('Cannot find user')
    }
    try {
      if(await bcrypt.compare(req.body.password, user.password)) {
        res.send('Success')
      } else {
        res.send('Not Allowed')
      }
    } catch {
      res.status(500).send()
    }
  })

// starts web server listening on localhost at port 3000
app.listen(port, () => {
    console.log('Listening on port 3000...');
});
