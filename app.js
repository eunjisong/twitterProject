const express = require('express');
const app = express();


// let's ask which one is the best way to use USE : seperate or one 
app.use(function(req, res, next){ 
    
    // if(req.url === '/special'){
    //     console.log('You reached the special area')
    // }

    //console.log(res.statusCode(200).json());
    console.log(req.method, res.statusCode)
    next();
})

app.use('/special/', function(req, res, next){
    // how do we access to /special/ 
    console.log('You reached the special area')
    next();
})



//////////////////////////////

app.get('/', function(req, res){
    res.send('Hello World')
    //console.log(req.method, req.url);

} )
app.get('/news', function(req, res){
    res.send('hihi')
    //console.log(res.status());
})

app.get('/special/', function(req, res){
    res.send('You\' reached the special area')
})

///////////////////////////////////

app.listen(3000, function(){
    console.log('server listening')
})