var http = require('http');
var fs = require('fs');

// tell the browser that this is going to be html, not plain text 

// a method available to me that creates a new server objects
// when the server object emits an event, parameter is a callback - turns out to be an event listener
// we need to build a response 
// you can use quotes for a name in a name-value pair objects javascript
		

// we have built a response

// I have a response stream, i write to it and then what i do is create a readable stream from index.htm and send it as the response
// send the data a chunk at a time

// our code is not even looking at the url - we are just responding to any request - we are giving back travis scott as the response
// the goal is to now giv edifferent content based on different urls 

http.createServer(function(req, res) {

	if
	res.writeHead(200, { 'Content-Type': 'application/json'})

	var obj = {
		firstname: 'Travis',
		lastname: 'Scott'
	}

	res.end(JSON.stringify(obj));

}).listen(1337, '127.0.0.1')

// we have a listen method that we can listen on 

// standard internal ip address is 127.0.0.1
// if i type localhost on my browser that will translate to my computer 
