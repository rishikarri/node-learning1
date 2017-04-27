const Emitter = () => {
	this.events = {};
}

Emitter.prototype.on = (type, listener) => {
	this.events[type] = this.events[type] || [];
	this.events[type].push(listener);
}

// emit means hey something happened

Emitter.prototype.emit = function(type) {
	if (this.events[type]){
		this.events[type].forEach(function(listener){
			listener();
		})
	}
}

module.exports = Emitter; 

