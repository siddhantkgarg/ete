var express = require('express');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');


app.use(express.static('public'));




//Routing 
// index page 
app.get('/', function(req, res) {
    res.render('blog/index');
});
app.get('/index', function(req, res) {
    res.render('index');
});
app.get('/articles/startofete', function(req, res) {
    res.render('blog/articles/startofete');
});
app.get('/featured', function(req, res) {
    res.render('blog/articles/aedilhaimushkil');
});

// about page 
// app.get('/about', function(req, res) {
//     res.render('pages/about');
// });

app.listen(7777);
console.log('7777 is the magic port');