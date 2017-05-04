var http = require('http');
var fs = require('fs');

// tell the browser that this is going to be html, not plain text 

// a method available to me that creates a new server objects
// when the server object emits an event, parameter is a callback - turns out to be an event listener
// we need to build a response 
// you can use quotes for a name in a name-value pair objects javascript
		

// we have built a response

http.createServer(function(req, res, error) {
	res.writeHead(200, { 'Content-Type': 'text/html' })
	var html = fs.readFileSync('./index.html')
	res.end(html)

}).listen(1337, '127.0.0.1')

// we have a listen method that we can listen on 

// standard internal ip address is 127.0.0.1
// if i type localhost on my browser that will translate to my computer 
