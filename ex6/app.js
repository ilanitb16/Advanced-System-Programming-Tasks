const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(express.static('public'));

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    if (username === 'guest' && password === '1234') {
        res.cookie('user', username);
        res.redirect('/private');
    } else {
        res.send('Invalid username or password.');
    }
    });

app.get('/private', (req, res) => {
    const user = req.cookies.user;
    if (user) {
        res.send(`Welcome, ${user}! This is your private page.`);
    } else {
        res.redirect('/');
    }
    });
    
app.listen(8080);