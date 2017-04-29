// initialize emitter constructor 



class Emitter2{
	constructor(){
		this.events = {}
	}
}

// now - take the prototype and add an on method to it 
Emitter2.prototype.on = function(type, listener) {
	// set this.events.type equal to what it already is or to an array 
	this.events[type] = this.events[type] || [];
	this.events[type] = this.events[type].push(listener);
}

Emitter2.prototype.emit = function(type) {
	if (this.events[type]){
		this.events[type].forEach(function(listener) {
			listener();
		})
	}
}


module.exports = Emitter2;

