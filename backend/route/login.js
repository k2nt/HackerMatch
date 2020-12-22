const express = require('express');
const regRouter = express();
const schema = require('../model/schema');
const {loginValid} = require('../model/validation');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
/**
 * User sign in
 * GET, POST
 * User submit sign in data (email, password), back end check if data is in repository
 * Return { success: true } on success, and { success: false, code: <HTTP status code>, errmsg <String> } otherwise
 */
regRouter.post('/auth', async (req, res) => {
    // const inputEmail = req.body.email;
    // const inputPassword = req.body.password;
    //Validate the payload
    const {error} = loginValid(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    
    // check if email exist
    let user = await schema.findOne({ "personal.email": req.body.email }); //retrieve user from database

    if (!user) {
        res.json({ success: false, error: 404, errmsg: "email not in database" });
    } else {
        //Check if password is correct
        const validPass = await bcrypt.compare(req.body.password, user.password);
        if (validPass) {
            const token = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET ); //generate token for front end 
            res.header('auth-token', token).json({ success: true , message: "Login!", token : token});
        } else {
            res.json({ success: false, error: 400, errmsg: "input password does not match database"});
        }
    }
});


module.exports = regRouter;