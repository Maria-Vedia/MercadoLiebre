const express = require('express');

const path = require('path');

const app = express();

const publicPath = path.resolve(__dirname, './public');

app.use(express.static(publicPath));

app.listen(3001, () => {
    console.log('Servidor andando');
});

app.get('/', (req, res) => {
    const home1 = path.resolve(__dirname,'./views/index.html');
     res.sendFile(home1);
  }); 
  
  app.get('/login', (req, res) => {
    const login = path.resolve(__dirname,'./views/login.html');
     res.sendFile(login);
  }); 

  app.get('/register', (req, res) => {
    const register = path.resolve(__dirname,'./views/register.html');
     res.sendFile(register);
  }); 

/*
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, './views/index.html'));
}); 

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'views/login.html'));
});

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'views/register.html'));
});*/