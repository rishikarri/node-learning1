var http = require('http');

// a method available to me that creates a new server objects
// when the server object emits an event, parameter is a callback - turns out to be an event listener
// we need to build a response 

http.createServer(function(req, res) {

	res.writeHead(200, { 'Content-Type':  })

})