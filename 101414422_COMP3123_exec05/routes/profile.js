const express = require('express');
const fs = require('fs');
const router = express.Router();

router.get('/profile', (req, res) => {
    const userData = JSON.parse(fs.readFileSync('user.json'));
    res.status(200).json(userData);
});

module.exports = router;
