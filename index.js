const path = require('path');
const express = require('express');
const app = express();
const port = 7732;

app.use(express.static(path.join(__dirname, 'webapp')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + "/webapp", 'index.html'));
});

// app.get('/transforms.json', (req, res) => {
//     res.sendFile(path.join(__dirname, 'data', 'transforms.json'));
// });
// 
// app.get('/ply.ply', (req, res) => {
//     res.sendFile(path.join(__dirname, 'data', 'ply.ply'));
// });

app.use(express.static(path.join(__dirname, 'data')));

app.listen(port, () => {
    console.log(`Example app is listening on port ${port}`);
});

