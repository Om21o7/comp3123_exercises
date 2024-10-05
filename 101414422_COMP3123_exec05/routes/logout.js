const express = require('express');
const router = express.Router();

router.get('/logout/:username', (req, res) => {
    const { username } = req.params;
    res.status(200).send(`<b>${username} successfully logged out.</b>`);
});

module.exports = router;
