const express = require('express');
const app = express(); // this is a working express app 
var bodyParser = require('body-parser'); //now i ahve an objec that the body parsing module gives back to me from the require function 

// use environment variables to make sure we are listening on the right port

const port = process.env.PORT || 3000; 

var urlencodedParser = bodyParser.urlencoded({extended: false})

app.use ('/assets', express.static(__dirname + '/public'))

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
	res.render('index', { ID: req.params.id, Qstr: req.query.qstr });

	// render it and then you can give it data, use the object, automatically getting any properties on that object
	// res is the response, it responds with ejs  automaticaly looks for the ejs file render is what it loads to the screen
})



//everytime we see /assets, what i'll do is go find this full file path public and return these files 
// this variable port will be either equal to the environment variable or local host 3000  

// if we have a get request at the home page, this function will fire 
app.get('/', function(req, res) {
	console.log(req, 'req');
	res.send('<html><head> <link href=assets/styles.css type=text/css rel=stylesheet /> </head> <body><h1>hello w </h1></body></html>')
})

// app.use just matches a route and then takes a function - express.static 
app.use('/', function(req, res, next) {
	// whenever this route hits, this route will be executed
	console.log('Request Url: ' + req.url); 
	next();
})

// the browswer loaded and then there was  link to assets / styles.css - which was available in public and then it loaded styles.css

app.get('/api', (req, res) => {
	res.json({
		hello: 'hello',
		cat: 'skyler',
		rishi: 'person',		
	})
})

app.get('/person/:id', function (req, res) {
	res.render('person', { ID: req.params.id, Qstr: req.query.qstrdd });
})

app.post('/person', urlencodedParser, function(req, res) {
	res.send('Thank You');
	console.log(req.body.firstname) // req.body is added by the middleware 
	console.log(req.body.lastname) // req.body is added by the middleware 
})

app.post('personjson', jsonParser, function(req, res) {
	res.send('Thank you for the JSON data!');
	console.log(req.body.firstname)
	console.log(req.body.lastname)
})

// learned how query strings work 
app.listen(port); 


// EC2 stands for Elastic Compute Generation 2 which means you can purchase or lease hardware or software infrastructure hosted on cloud by the provider on an on demand basis. Elastic meaning you can grow your usage or shrink your usage and pay for what you have used.

// can lease hardware or software infras
