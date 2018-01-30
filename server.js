var express = require('express');
var app = express();
app.set('view engine', 'pug');
app.set('views','./views');

app.use(express.static('views'))


app.get('/log', function(req, res){
    res.render('log');
});

app.get('/auth/google', function(req, res){
    res.render('google');
});



app.listen(3000);
app.use(function (req, res, next) {
    res.status(404).send('Wybacz, nie mogliśmy odnaleźć tego, czego żądasz!')
});