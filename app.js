var Emitter = require('./emitter'); 

var myNewEmitter = new Emitter(); 

myNewEmitter.on('greet', function(){
	console.log('someone said hello');
});


// this will run whenever the greet function is emitted
// i'm calling it an event but it's really a property name
