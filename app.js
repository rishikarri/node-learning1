var fs = require('fs');

// highWaterMark: how big we want to make our chunks to be
var readable = fs.createReadStream(__dirname + '/greet.txt', {
	encoding: 'utf8',
	highWaterMark: 100
	
});

// the stream will fill up a buffer with contents
// if the contents are smaller than the buffer, you get all the data
// if it's bigger then you get portions of the file and then a data event is emitted until it finishes the file 

var writable = fs.createWriteStream(__dirname + '/greetcopy.txt');

readable.on('data', function(chunk){
	console.log(chunk);
	writable.write(chunk);
})

// readable is the source, writable is the destination. sets up the event listener to listen for the chunk of data 
readable.pipe(writable);