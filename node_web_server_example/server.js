const express = require('express');
const hbs = require('hbs');

var app = express();

//middleware
app.use(express.static(__dirname+'/public'));

hbs.registerPartials(__dirname+'/views/partials');
app.set('view engine', 'hbs');

hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear();
});

hbs.registerHelper('textToUpperCase', (text) =>{
   return text.toUpperCase();
});


var homeTemplateObjet = {
    pageTitle: 'Home Page',
    welcomeMessage: 'Welcome to my page!'
};

var aboutTemplateObjet = {
    pageTitle: 'About Page',
};



app.get('/',(req, res) => {
   res.render('home.hbs',homeTemplateObjet);
});

app.get('/json', (req, res) =>{
   res.send({
       name: 'Adrián',
       likes: [
           'cars',
           'smth'
       ]
   });
});

app.get('/about', (req, res) => {
   res.render('about.hbs',aboutTemplateObjet);
});

app.get('/bad', (req, res) => {
    res.send({
        errorMessage: 'Unable to handle request....'
    });
});

app.listen(3000, () => {
    console.log('Server Loaded...');
});