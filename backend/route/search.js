const express = require('express');
const queryRoute = express();
const schema = require('../model/schema');
//const verify = require('./tokenVerify');

queryRoute.get('/get', async (req, res)=> {
    // console.log(req.query)
    let user = await schema.find();//{ "personal.email": req.query.email }); //retrieve user from database

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