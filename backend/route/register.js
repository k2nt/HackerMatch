const express = require('express');
const User = require('../model/schema');
const router = express();
const { regisValid } = require('../model/validation'); 
const bcrypt = require('bcryptjs');

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


// router.get('/submit', async(req,res) => {
//     try {
//         res.send("submitted");
//         const users = await User.find();
//         res.json(users);
//     }
//     catch(err){
//         res.json({message: err});
//     }
    
// });


/**
 *  User sign up
 *  POST
 *  User submit sign in data (email, password), back end create new data in database
 *  Return { success: true } on success, and { success: false, code: <HTTP status code>, errmsg <String> } otherwise
 */

router.post('/submit', async(req,res) => {
    const {error}  = regisValid(req.body); //response return from validation
    if (error){
        return res.status(400).send(error.details[0].message);
    }
    //check email exist
    const doesUserExist = await User.exists({"personal.email": req.body.personal.email});
    if (doesUserExist){
        return res.json({ success: false, error: 400, errmsg: "User already registered."});
    }

    //Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPw = await bcrypt.hash(req.body.password, salt);

    //Create a new user
    const usr = new User({   //create new user object from payload
        personal : req.body.personal,
        password : hashedPw,
        tags : req.body.tags,
        skills : req.body.skills,
        pitch : req.body.pitch
    });

    try {
        const userSaved = await usr.save(); //update to db
        res.json({success : true, user : user._id}); //send msg
    }
    catch(err){
        res.json({ success: false, code: 500, errmsg: err.body }); //if error occur 
    }
     
});


module.exports = router;