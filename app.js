var express  = require('express'),
	exphbs   = require('express-handlebars'),
	comments = require('./mock/comments');

var app = express(),
	hbs = exphbs.create({
	    partialsDir: 'views/partials/',
	    defaultLayout: 'main',
	    helpers: require('./lib/helpers'),
	});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use(express.static('public'));


app.get('/', function (req, res) {
    res.render('home', {
    	title: 'sija',
    	comments: comments
    });
});


app.listen(3000);
console.log('app listening on port 3000!');