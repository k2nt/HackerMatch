const express = require('express');
const app = express();
const db = require('mongoose');
const bodyParser = require('body-parser');
const signUpRoute = require('./route/register');
const loginRoute = require('./route/login');
const cookieParser = require('cookie-parser');


require('dotenv/config');
//Middleware
app.use(bodyParser.json()); // to parse response in json



app.use('/signup', signUpRoute); // navigate to sign up page
app.use('/login', loginRoute); // navigate to login page


app.get('/', (req,res) => {
    res.send('We are on home');
});

//connect to DB
db.connect(
    process.env.DB_CONNECTION, 
    { useNewUrlParser: true , useUnifiedTopology: true},
    () => console.log('connected to DB')
);


app.listen(9000); // listen to port 9000