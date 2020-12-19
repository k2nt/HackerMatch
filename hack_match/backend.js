const express = require('express');
const app = express();
const db = require('mongoose');
const bodyParser = require('body-parser');
const signUpRoute = require('./route/register');
const loginRoute = require('./route/login');
const cookieParser = require('cookie-parser');


// co;
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });




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