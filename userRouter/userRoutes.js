var express = require('express');
var app = express();
var userRoutes = express.Router();

var User = require('C:/Users/nbattula/Desktop/angular_mrcb/ng5-app/src/model/user');


userRoutes.route('/createUser').post(function (req, res) {
    var user = new User(req.body);
    user.save()
        .then(item => {
            res.status(200).json({ 'user': 'user added successfully' });
        })
        .catch(err => {
            res.staus(400).send("unable to save data to database");
        });
});

userRoutes.route('/validateUser').post(function (req, res) {
    console.log(req.body);
    console.log("....this is from user routes..validate user");
    const testUsername = req.body.username
    const testPassword =  req.body.password;
    console.log(testUsername);
    console.log(testPassword);
    var validateUser = User.find(x => x.username === testUsername && x.password === testPassword);
    console.log(validateUser);
    if (!validateUser) return error('Username or password is incorrect');
    user.then(item => {
            res.status(200).json({ 'user': 'valid user' });
        })
        .catch(err => {
            res.staus(400).send("invalid user");
        });
});

userRoutes.route('/').get(function (req, res) {
    User.find(function (err, users) {
        if (err) {
            console.log(err);
        }
        else {
            res.json(users);
            console.log("got all the users data");
        }
    });
});



module.exports = userRoutes;
