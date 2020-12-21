const express = require('express');
const queryRoute = express();
const schema = require('../model/schema');


queryRoute.get('/get', async (req,res)=> {
    const queryEmail = req.body.email;
    
    var data = await schema.findOne({ "user.personal.email": queryEmail }); //retrieve user from database

    // console.log(data);
    if (data == null) {
        res.json({ success: false, error: 404, errmsg: "email not in database" });
    } else {
        res.json(data);   
    }
});



queryRoute.get('/query', async (req,res) =>{
    



});
