const express = require('express');
const router = express.Router();
const User = require('../models/user');

// router.get('/reg', (req, res) => {
//     res.send('Registration page');
// });

router.post('/reg', (req, res) => {
    let newUser = new User({
        name: req.body.name,
        email: req.body.email,
        login: req.body.login,
        password: req.body.password
    });

    User.addUser(newUser, (err, user) => {
        if(err)
            res.json({success: false, msg: 'User not add!'});
        else
            res.json({success: true, msg: 'User add!'});
    });
});

router.get('/auth', (req, res) => {
    res.send('Auth page');
});

router.get('/dashboard', (req, res) => {
    res.send('User cabinet');
});

module.exports = router;