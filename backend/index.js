const express = require('express');
const app = express();
const db = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const apiRoute = require('./route/route');
const searchRoute = require('./route/search');
const cors = require('cors')
// const cookieParser = require('cookie-parser');


require('./auth/auth');
require('dotenv/config');
//Middleware
app.use(bodyParser.json()); // to parse response in json
app.use(cors());

app.use('/api', apiRoute); // navigate to sign up page
// app.use('/login', loginRoute); // navigate to login page
app.use('/search',passport.authenticate('jwt', { session: false }) ,searchRoute);
// app.use('/user', passport.authenticate('jwt', { session: false }), secureRoute);


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