const express = require('express');
const User = require('../model/schema');
const router = express();



/**
 *  Render login page
 */

router.get('/', async(req,res) => {
    try {
        res.send("in login"); //send login json message
    }
    catch(err){
        res.json({message: err});
    }
    
});


/**
 *  To test whether user has been added
 *  Print out all object in current db
 */


router.get('/submit', async(req,res) => {
    try {
        res.send("submitted");
        const users = await User.find();
        res.json(users);
    }
    catch(err){
        res.json({message: err});
    }
    
});


/**
 *  User sign up
 *  POST
 *  User submit sign in data (email, password), back end create new data in database
 *  Return { success: true } on success, and { success: false, code: <HTTP status code>, errmsg <String> } otherwise
 */


router.post('/submit', async (req,res) => {
    // console.log(req.body);
    // res.send("submitted");
    
    const usr = new User({   //create new user object from form
        user: req.body.user
    });

    const email = usr.user.personal.email; // get email from json
    // const password = usr.user.personal.password // get password
    const doesUserExist = await User.exists({"user.personal.email": email}); // check if email already been used

    if (doesUserExist){
        res.json({ success: false, error: 400, errmsg: "User already registered."});
        // return;  // simply return and do nothing
    }
    else{  // not exist
        try {
            const userSaved = await usr.save(); //update to db
            res.json({success : true}); //send msg
        }
        catch(err){
            res.json({ success: false, code: 500, errmsg: err.body }); //if error occur 
        }
     }
});


module.exports = router;