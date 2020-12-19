
const express = require('express');
const schema = require('../model/schema');
const router = express();
// const User = require('../model/schema');






router.get('/', async(req,res) => {
    try {
        res.send("in login");
        const users = await schema.find();
        res.json(users);
    }
    catch(err){
        res.json({message: err});
    }
    
});

router.get('/submit', async(req,res) => {
    try {
        res.send("submitted");
        const users = await schema.find();
        res.json(users);
    }
    catch(err){
        res.json({message: err});
    }
    
});




// app.post('/register', (req, res) => {
//     const { email, firstName, lastName, password, confirmPassword } = req.body;

//     // Check if the password and confirm password fields match
//     if (password === confirmPassword) {

//         // Check if user with the same email is also registered
//         if (users.find(user => user.email === email)) {

//             res.render('register', {
//                 message: 'User already registered.',
//                 messageClass: 'alert-danger'
//             });

//             return;
//         }

//         const hashedPassword = getHashedPassword(password);

//         // Store user into the database if you are using one
//         users.push({
//             firstName,
//             lastName,
//             email,
//             password: hashedPassword
//         });

//         res.render('login', {
//             message: 'Registration Complete. Please login to continue.',
//             messageClass: 'alert-success'
//         });
//     } else {
//         res.render('register', {
//             message: 'Password does not match.',
//             messageClass: 'alert-danger'
//         });
//     }
// });




router.post('/submit', async (req,res) => {
    console.log(req.body);
    // res.send("submitted");
    
    const usr = new User({
        user: req.body.user
    });

    const email = usr.user.personal.email; // get email from json
    // const password = usr.user.personal.password // get password
    console.log(email);
    const doesUserExist = await schema.exists({"user.personal.email": email}); // check if email already been used
    console.log(doesUserExist);

    if (doesUserExist){
        res.send("User already registered.");
        return;
    }
    else{  // not exist
        try {
            console.log("got here");
            const userSaved = await usr.save();
            res.json(userSaved)
        }
        catch(err){
            res.json({message: err});
        }
     }
});


module.exports = router;