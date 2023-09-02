const express = require('express');

const path = require('path');

const app = express();

const publicPath = path.resolve(__dirname, './public');

app.use(express.static(publicPath));

app.listen(3010, () => {
    console.log('Servidor andando');
});

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'views/index.html'));
}); 

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'views/login.html'));
});

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'views/register.html'));
});