// grabbing emitter - you simply just need to grab them from events 
var Emitter = require('events');

var emtr = new Emitter();

emtr.on('greet', function(){
	console.log('somewhere someoene said hello');
})

emtr.on('greet', function(){
	console.log(' it is lit')
})

emtr.emit('greet');