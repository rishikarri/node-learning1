function greet(callback){	
	const data = {
		name: 'Travis Scott',
	}

	const data2 = {
		name: 'rishi'
	}
	callback(data2)
	console.log('hello');

	
	callback(data);
}

greet(function(data){
	console.log('it is lit');
	console.log(data.name)
})