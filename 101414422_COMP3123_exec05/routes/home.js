const express = require('express');
const path = require('path');
const router = express.Router();
const fs = require('fs');


// http://localhost:8081/home
router.get('/home', (req, res) => {
    const homePagePath = path.join(__dirname, '../public', 'home.html');
    const homePageContent = fs.readFileSync(homePagePath, 'utf-8');
    
    res.status(200);
    res.send(homePageContent); // Sending the HTML content as a string
});

module.exports = router;
