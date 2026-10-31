
const express = require('express');

const app = express();

// Home route
app.get('/', (req, res) => {
    res.status(200).send('Welcome to my Node.js server!');
});

// About route
app.get('/about', (req, res) => {
    res.status(200).json({
        name: 'Chikoti Sai Kumar',
        section: 'S-15'
    });
});

// Time route
app.get('/time', (req, res) => {
    res.status(200).send(new Date().toString());
});

// 404 route
app.use((req, res) => {
    res.status(404).send('404 - Page Not Found');
});

// Start server
app.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});
