const fs = require('fs');

let user1 = {username:"Bob", password:"700"};

let user = JSON.stringify(user1); 



fs.readFile('./userDatabase.json', 'utf8', (err, data) => {
    if (err) {
      console.log(`Error reading file from disk: ${err}`)
    } 
    else {
        // parse JSON string to JSON object
        const databases = JSON.parse(data)
        
        // add a new record
        databases.push(user);
        console.log(databases);
  
        // write new data back to the file
        fs.writeFile('./userDatabase.json', JSON.stringify(databases, null, 4), err => {
            if (err) {
                console.log(`Error writing file: ${err}`)
            }
        })
    }
})


