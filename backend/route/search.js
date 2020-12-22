const express = require('express');
const queryRoute = express();
const schema = require('../model/schema');
const verify = require('./tokenVerify');

queryRoute.get('/get', verify, async (req,res)=> {
    
    let user = await schema.findOne({ "personal.email": req.body.email }); //retrieve user from database

    // console.log(data);
    if (!user) {
        res.json({ success: false, error: 404, errmsg: "email not in database" });
    } else {
        res.json(user);   
    }
});



// queryRoute.get('/query', async (req,res) =>{
    



// });
module.exports = queryRoute;