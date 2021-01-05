const express = require('express');
const router = express();
const schema = require('../model/schema');
const {loginValid , regisValid} = require('../auth/validation');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

router.post('/login/auth', async (req, res) => {
    
    //Validate the payload
    const {error} = loginValid(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    console.log("There is an attempt to log in");
    // check if email exist
    let user = await schema.findOne({ "personal.email": req.body.email }); //retrieve user from database

    if (!user) {
        res.json({ success: false, error: 404, errmsg: "email not in database" });
    } else {
        //Check if password is correct
        const validPass = await bcrypt.compare(req.body.password, user.password);
        if (validPass) {
            const token = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET ); //generate token for front end 
            res.header('auth-token', token).status(200).json({ success: true , message: "Login!", token : token}); //format return message
        } else {
            res.json({ success: false, error: 400, errmsg: "input password does not match database"});
        }
    }
});


router.post('/signup', async(req,res) => {
    const {error}  = regisValid(req.body); //response return from validation
    if (error) return res.status(400).send(error.details[0].message);
    
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
        res.json({success : true, user : userSaved._id}); //send msg
    }
    catch(err){
        res.json({ success: false, code: 500, errmsg: err.body }); //if error occur 
    }
     
});


module.exports = router;









