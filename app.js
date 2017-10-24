const express = require('express');
const app = express(); // this is a working express app 

// use environment variables to make sure we are listening on the right port

const port = process.env.PORT || 3000; 
// this variable port will be either equal to the environment variable or local host 3000  

// if we have a get request at the home page, this function will fire 
app.get('/', function(req, res) {
	console.log(req, 'req');
	res.send('<html><head></head> <body><h1>hello w </h1></body></html>')
})

app.get('/api', (req, res) => {
	res.json({
		hello: 'hello',
		cat: 'skyler',
		rishi: 'person',		
	})
})

app.listen(port); 

