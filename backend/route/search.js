const express = require('express');
const queryRoute = express();
const schema = require('../model/schema');
const jwt = require('jsonwebtoken');
//const verify = require('./tokenVerify');

queryRoute.get('/get/all', async (req, res)=> {  //get all avaible user
    // console.log(req.query)
    const user = await schema.find();//{ "personal.email": req.query.email }); //retrieve user from database

    console.log(user[0]);
    if (!user) {
        res.json({ success: false, error: 404, errmsg: "database is empty" });
    } else {
        res.json(user);   
    }
});

queryRoute.get('/get', async (req, res)=> {  //filter user by tag - model { key : true} 
    
    if(req.query.tag) { // if tag is applied

    }

    let result = []; // form array from tags value



    for(var i in req.body.tags) { // form array of key value pair for query
        result.push({["tags." + i] : req.body.tags[i]});
    }
    
    
    const users = await schema.find({'$or': result}); // retrieve user that match the tag
    if (!users) {
        res.json({ success: false, error: 204, errmsg: "No user exists" });
    } else {
        res.json(users);   
    }
});

queryRoute.get('/skill', async (req, res)=> {  //filter user by skill - model { key : true} 
    // console.log(req.query.skill);
    try {
        const users = await schema.find({skills: {$in : req.query.skill}});
        if (!users) {
            res.status(400).json({message: "non match"});
        }
        else{
            res.json(users);
        }
        
    } catch(error){
        res.json({ success: false, error: 404, errmsg: error });        
    }
});





 // update user profile 

queryRoute.patch('/update', async (req, res) => { // update user profile 
    const token = req.headers.authorization.substring(6).trim(); // get the token
    const Id = jwt.verify(token, process.env.TOKEN_SECRET);
    
    schema.updateOne({ _id: Id._id}, req.body)
    .then(function (success) {
      res.status(200).json({ success: true , message: "Updated!"});
    })
    .catch(function (error) {
        res.status(404).send(err);
    });

    
});


module.exports = queryRoute;