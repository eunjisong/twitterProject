//let's ask about remove router!!! 

const express = require('express');
const app = express();
const routes = require('./routes');
app.use('/', routes);
const nunjucks = require('nunjucks');
const tweetBank = require('./tweetBank')

var locals = {
    title: 'An Example',
    people: [
        { name: 'Gandalf'},
        { name: 'Frodo' },
        { name: 'Hermione'}
    ]
};

nunjucks.configure('views', {noCache: true});

app.set('view engine', 'html'); 
app.engine('html', nunjucks.render);


//////////////////// MIDDLEWARE /////////
app.use(function(req, res, next){ 

    console.log(req.method, res.statusCode)
    next();
})

app.use('/special/', function(req, res, next){
    
    console.log('You reached the special area')
    next();
})

app.use('/tweet/5', function(req, res, next){
    
    console.log(tweetBank.getFakeTweet())
    next();
})


////////////////////////////// METHOD //// 

app.get('/', function(req, res){
    res.send('Hello World')

} )

app.get('/news', function(req, res){
    res.send('hihi')
})

app.get('/special/', function(req, res){
    res.send('You\' reached the special area')
})

app.get('/views', function(req, res){
    res.render('index', locals);
    
})

// let's ask the better way to implement this. it's more usable 
app.get('/tweet/5', function(req, res){
    res.send(tweetBank.list()[4].content)
})

/////////////////////////////////// LISTENING  /////

app.listen(3000, function(){
    console.log('server listening')
})