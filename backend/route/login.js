const express = require('express');
const regRouter = express();
const schema = require('../model/schema');
const generateAuthToken = () => {
    return crypto.randomBytes(30).toString('hex');
}


//Validation

const joi = require('@hapi/joi');

/**
 * User sign in
 * GET, POST
 * User submit sign in data (email, password), back end check if data is in repository
 * Return { success: true } on success, and { success: false, code: <HTTP status code>, errmsg <String> } otherwise
 */
regRouter.get('/auth', async (req, res) => {
    const inputEmail = req.body.email;
    const inputPassword = req.body.password;


    var data = await schema.findOne({ "user.personal.email": inputEmail }); //retrieve user from database

    // console.log(data);
    if (data == null) {
        res.json({ success: false, error: 404, errmsg: "email not in database" });
    } else {
        if (data.user.password === inputPassword) {
            res.json({ success: true });
        } else {
            res.json({ success: false, error: 400, errmsg: "input password does not match database"});
        }
    }
});


module.exports = regRouter;