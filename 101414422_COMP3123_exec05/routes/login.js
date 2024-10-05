const express = require('express');
const fs = require('fs');
const router = express.Router();

router.post('/login', (req, res) => {
    const { username, password } = req.body;
    const userData = JSON.parse(fs.readFileSync('user.json'));

    if (username !== userData.username) {
        return res.status(400).json({ status: false, message: 'User Name is invalid' });
    }

    if (password !== userData.password) {
        return res.status(400).json({ status: false, message: 'Password is invalid' });
    }

    return res.status(200).json({ status: true, message: 'User Is valid' });
});

module.exports = router;
