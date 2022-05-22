
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = process.env.PORT || 4000

const { users } = require('./state')

/* BEGIN - create routes here */

//give app the ability to read the json in the req.body
app.use(bodyParser.json())

// get all users
app.get('/users', function(req, res){
  res.json(users);
});

//get a single user by id
app.get('/users/:id', (req, res) => {
 let foundUser = users.find(el => el._id == req.params.id);
 res.json(foundUser);
});

//POST or create a new user and add them to the users array
//in state.js
//use res.json to send the last user in the array (the new one)
//back to the client
app.post('/users', (req, res) => {
  console.log("POST, /users")
  //create new user object variable to hold data
  let newUser = {};
  let lastIndex = users.length - 1;
  let json = req.body;
  console.log("body = ", json);
  //new user has a new id, +2 to the last index in array
  newUser._id = lastIndex + 2;
  //new user has a name, set by the req.body.name
  newUser.name = json.name;
  //new user has an occupation, set by the req.body
  newUser.occupation = json.occupation;
  //add the new user to the users array
  users.push(newUser);
  //set the lastIndex to the new last index number
  lastIndex = users.length - 1;
  res.json(users[lastIndex]);
});

/* END - create routes here */

app.listen(port, () => 
  console.log(`Example app listening on port ${port}!`))