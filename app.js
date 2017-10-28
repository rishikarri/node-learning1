const express = require('express');
const app = express(); // this is a working express app 

// use environment variables to make sure we are listening on the right port

const port = process.env.PORT || 3000; 

app.use ('/assets', express.static(__dirname + '/public'))

//everytime we see /assets, what i'll do is go find this full file path public and return these files 
// this variable port will be either equal to the environment variable or local host 3000  

// if we have a get request at the home page, this function will fire 
app.get('/', function(req, res) {
	console.log(req, 'req');
	res.send('<html><head> <link href=assets/styles.css type=text/css rel=stylesheet /> </head> <body><h1>hello w </h1></body></html>')
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
	res.send('<html><head></head> <body><h1>hello Person: ' +req.params.id+' </h1></body></html>')

})

app.listen(port); 

