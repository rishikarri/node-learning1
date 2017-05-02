// Buffer is a feature that is globally available to javascript

var buf = new Buffer('Hello', 'utf8');

// I have asked the buffer to take this string and convert it to binary data
// take this, use the unicode character set 
console.log(buf);
console.log(buf.toString());
console.log(buf.toJSON())