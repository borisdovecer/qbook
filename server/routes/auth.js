const express = require('express');
const router = express.Router();

module.exports = (passport) => {
    router.post('/login', passport.authenticate('local', {}), function (req, res) {
        res.send('hey')
    });
    return router;
};
