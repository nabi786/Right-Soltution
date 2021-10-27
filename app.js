var express = require('express');
var app = express();
var path = require('path');
var port = process.env.port || 8000
var cookieParser = require('cookie-parser');
var logger = require('morgan');


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// defining path
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', function(req,res){
    res.render('index')
})


app.get('/about', function(req,res){
    res.render('about')
})


app.get('/facilities', function(req,res){
    res.render('facilities')
})

app.get('/gallary', function(req,res){
    res.render('gallary')
})

app.get('/login', function(req,res){
    res.render('login')
})

app.get('/signup', function(req,res){
    res.render('singup')
})

app.listen(port, function(err,data){
    if(err) throw err;

    console.log("server has been started")
})