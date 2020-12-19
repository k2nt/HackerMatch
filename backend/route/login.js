const express = require('express');
const regRouter = express();
const schema = require('../model/schema');
const generateAuthToken = () => {
    return crypto.randomBytes(30).toString('hex');
}




/**
 * User sign in
 * GET, POST
 * User submit sign in data (email, password), back end check if data is in repository
 * Return { success: true } on success, and { success: false, code: <HTTP status code>, errmsg <String> } otherwise
 */
regRouter.post('/submit-form', async (req, res) => {
    const inputEmail = req.body.email;
    const inputPassword = req.body.password;


    var data = await schema.findOne({ "user.personal.email": inputEmail });

    console.log(data);
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



// reg.post('/login', (req, res) => {
//     const { email, password } = req.body;
//     const hashedPassword = getHashedPassword(password);

//     const user = users.find(u => {
//         return u.email === email && hashedPassword === u.password
//     });

//     if (user) {
//         const authToken = generateAuthToken();

//         // Store authentication token
//         authTokens[authToken] = user;

//         // Setting the auth token in cookies
//         res.cookie('AuthToken', authToken);

//         // Redirect user to the protected page
//         res.redirect('/protected');
//     } else {
//         res.send("Fail to login");
        
//     };
// });

module.exports = regRouter;