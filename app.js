const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

//tells express to use the pug template engine (in the view folder by default)
app.set('view engine', 'pug')

//this is for the root route (the index page)
app.get('/', (req, res) => {
    res.render('index'); 
});

app.get('/cards', (req, res) => {
    res.render('cards', {prompt: "Who is bured in Grant's tomb?"});
});

app.get('/hello', (req, res) => {
    res.render('hello');
});

app.post('/hello', (req, res) => {
    console.dir(req.body);
    res.render('hello');
});

app.listen(3000, () => {
    console.log('The application is running on localhost:3000')
});