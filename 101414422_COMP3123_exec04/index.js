const express = require('express');
const app = express();
const SERVER_PORT = process.env.port || 3000;

// http://localhost:3000/hello
app.get('/hello', (req, res) => {
    res.send('<h1>Hello Express JS</h1>');
});


app.get('/user', (req, res) => {
    // Destructure the query parameters, with default values if not provided
    const { firstname = 'OM', lastname = 'MAKWANA' } = req.query;

    // Respond with a JSON object containing the firstname and lastname
    res.json({ firstname, lastname });
});

app.post('/user/:firstname/:lastname', (req, res) => {
    const { firstname, lastname } = req.params;
    res.json({ firstname, lastname });
});

app.listen(SERVER_PORT, () => {
    console.log(`Server is running on port ${SERVER_PORT}`);
});

