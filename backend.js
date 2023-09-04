const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello, Express!');
});

app.get('/about', (req, res) => {
    res.send('This is the about page.');
});
app.get('/home', (req, res) => {
    res.send('my name is shweta');
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
