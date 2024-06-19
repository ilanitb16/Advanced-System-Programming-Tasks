// Require and initialize the Express module
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(express.static('public'));

// Add middleware for parsing application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/', (req, res) => {
    // Now using req.body to get data sent from the POST request
    res.send(`Username: ${req.body.username}, Password: ${req.body.password}`);
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
