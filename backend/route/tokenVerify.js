const jwt = require('jsonwebtoken');

const auth = (req, res ,next) => {
    const token = req.header('auth-token'); //get token from header
    
    //token does not exist
    if (!token) return res.status(401).send("Access Denied");

    try {
        const verified = jwt.verify(token, process.env.TOKEN_SECRET); //return user id
        req.user = verified;
        next(); // continue to next action
    }
    catch (err) {
        res.status(400).send('Invalid Token');
    }
}

module.exports = auth;