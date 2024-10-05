const express = require('express');
const app = express();
const homeRoute = require('./routes/home');
const profileRoute = require('./routes/profile');
const loginRoute = require('./routes/login');
const logoutRoute = require('./routes/logout');

// Middleware to parse JSON body data
app.use(express.json());

// Serve static files from the "public" folder
app.use(express.static('public'));

// Use routes
app.use(homeRoute);
app.use(profileRoute);
app.use(loginRoute);
app.use(logoutRoute);

// Error handling middleware for server errors
app.use((err, req, res, next) => {
    res.status(500).send('Server Error');
});

// Start the server
const port = process.env.PORT || 8081;
app.listen(port, () => {
    console.log(`Web Server is listening at port ${port}`);
});
