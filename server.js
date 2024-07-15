const express = require('express');
const ejs = require('ejs');

const roomRoutes = require('./routes/roomsApp');
const expRoutes = require('./routes/expApp');
const blogRoutes = require('./routes/blogApp');
const foodRoutes = require('./routes/foodApp');

const port = https://prasenjitsadhu.github.io/baradighithebungalow.com/;

const app = express();

app.set('view engine', 'ejs');


//modification for localhost use only
if (process.env.NODE_ENV != 'production') {
    console.log('Development mode');
    app.use('/public', express.static(__dirname + '/public'));
}


app.get('/', function (req, res) {
    res.render('home', {page_name: 'home'});
});

app.get('/success', function (req, res) {
    res.render('home', {page_name: 'home'});
});

app.get('/about', function (req, res) {
    res.render('about', {page_name: 'about'});
});

app.get('/amenities', function (req, res) {
    res.render('amenities', {page_name: 'amenities'});
});

app.get('/gallery', function (req, res) {
    res.render('gallery', {page_name: 'gallery'});
});

app.get('/contact', function (req, res) {
    res.render('contact', {page_name: 'contact'});
});

app.get('/privacy', function (req, res) {
    res.render('privacy', {page_name: 'privacy'});
});

app.get('/terms', function (req, res) {
    res.render('terms', {page_name: 'terms'});
});

app.get('/success', function (req, res) {
    res.render('contact', {page_name: 'success'});
});

app.use("/rooms", roomRoutes);
app.use("/experience", expRoutes);
app.use("/blog", blogRoutes);
app.use("/dining", foodRoutes);

app.use(function(req, res){
    res.status(404).redirect('/');
});

app.listen(port, function(){
    console.log("Server is listening on port " + port);

});

