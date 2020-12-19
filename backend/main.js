const express = require('express');
const app = express();
const db = require('mongoose');
const bodyParser = require('body-parser');
const signUpRoute = require('./route/register');
const loginRoute = require('./route/login');
const cookieParser = require('cookie-parser');


require('dotenv/config');
//Middleware
app.use(bodyParser.json());



app.use('/signup', signUpRoute);
app.use('/login', loginRoute);


app.get('/', (req,res) => {
    res.send('We are on home');
});

//connect to DB
db.connect(
    process.env.DB_CONNECTION, 
    { useNewUrlParser: true , useUnifiedTopology: true},
    () => console.log('connected to DB')
);


app.listen(3000);