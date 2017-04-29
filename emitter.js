// create a simple emitter that works similar to the way the real one works

// this isg oing to allow us to save an event that has happened and respond to an event happening 

function Emitter() {
	this.events = {};
}

// adding a method called on - it is going to take the type of event that we want and a listener 
Emitter.prototype.on = function(type, listener) {
	this.events[type] = this.events[type] || [];
	this.events[type].push(listener)
}

Emitter.prototype.emit = function(type) {
	if (this.events[type]){
		this.events[type].forEach(function(listener){
			listener();
		});
	}
}

module.exports = Emitter; 