const emitter = require('./emitter2.js');

emtr = new emitter();
// now has an empty events object

emtr.on('greet', function() {
	console.log('it is lit');
});

emtr.emit('greet');