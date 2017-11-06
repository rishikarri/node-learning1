const express = require('express');
const app = express(); // this is a working express app 
var bodyParser = require('body-parser'); //now i ahve an objec that the body parsing module gives back to me from the require function 

// use environment variables to make sure we are listening on the right port

const port = process.env.PORT || 3000; 

var urlencodedParser = bodyParser.urlencoded({extended: false})

app.use ('/assets', express.static(__dirname + '/public'))

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
	res.render('index', { ID: req.params.id, Qstr: req.query.qstr });

	// render it and then you can give it data, use the object, automatically getting any properties on that object
	// res is the response, it responds with ejs  automaticaly looks for the ejs file render is what it loads to the screen
})



//everytime we see /assets, what i'll do is go find this full file path public and return these files 
// this variable port will be either equal to the environment variable or local host 3000  

// if we have a get request at the home page, this function will fire 
app.get('/', function(req, res) {
	console.log(req, 'req');
	res.send('<html><head> <link href=assets/styles.css type=text/css rel=stylesheet /> </head> <body><h1>hello w </h1></body></html>')
})

// app.use just matches a route and then takes a function - express.static 
app.use('/', function(req, res, next) {
	// whenever this route hits, this route will be executed
	console.log('Request Url: ' + req.url); 
	next();
})

// the browswer loaded and then there was  link to assets / styles.css - which was available in public and then it loaded styles.css

app.get('/api', (req, res) => {
	res.json({
		hello: 'hello',
		cat: 'skyler',
		rishi: 'person',		
	})
})

app.get('/person/:id', function (req, res) {
	res.render('person', { ID: req.params.id, Qstr: req.query.qstrdd });
})

app.post('/person', urlencodedParser, function(req, res) {
	res.send('Thank You');
	console.log(req.body.firstname) // req.body is added by the middleware 
	console.log(req.body.lastname) // req.body is added by the middleware 
})

app.post('personjson', jsonParser, function(req, res) {
	res.send('Thank you for the JSON data!');
	console.log(req.body.firstname)
	console.log(req.body.lastname)
})

// learned how query strings work 
app.listen(port); 


// EC2 stands for Elastic Compute Generation 2 which means you can purchase or lease hardware or software infrastructure hosted on cloud by the provider on an on demand basis. Elastic meaning you can grow your usage or shrink your usage and pay for what you have used.

// can lease hardware or software infras


// REST - stand sfor representational state transfer. We decide that HTTP verbs and URLS mean something
// we advocate using HTTP as it was originally envisioned 
// let's standardize on a way of using HTTP request so wehn they are sent, wehn you read them 
// they actually match what is happening

// have an api so that it responds to the http requests in the way that is expected

// Command line interface - a utility to type commands to your computer rather than clicking with teh mouse 
// all work the same way - you type in a command and a program you want to run and htey run
// how computers used to be - GUIs - computers used to be something where you just type in and look at words 
// on the screen - use a lot of command 

// a microporcessor is a tiny machine - with very small parts that work in tandem with electrical inputs and ultimately do a job
// we give the microporcessor instructions
// we give instructions to the microprocessor - it gets instructions in IA-32, x86-64, ARM, MIPS
// the processor is a physical thing, it is something that you can hold in your hand 
// it is a machine that accepts instructions and carries them out 
// machine code programming languages spoken by computer processors - every program you run on your computer has been compiled to machine code 
// all code eventualy becomes machine code and the amchine is waht carries out the requirements
// whenver we are writing a programming language, there is some other process that is converting it into macine code
// we don't write machine code is because it's really hard to understand
// what to do with what pieces of memory on your computer - very very low level
// instead of writing in machine code, we write in languages taht are compiled into machine code
// machine language - lowest level - directly speaking to the microprocessor
// assembly language - very low but incredibly low level language but still low level
// huge error of c / c++ - still lets you have a degree of control that is lower level and a bit closer to hte microprocessor itself
// c / c++ is great because you ahv ea great level of control but easier to code in than assembly language or machine code
// javascript - really high level - very very very far remove from the computer's processor - don't deal with memory at all
// you have an engine between the langauge 
// when we talk about javascript, we talk about writing a language that other languages get converted to machine code
// node is written in c++ - when we write node we write javascript, node itself is written in c++ 
// it is a c++ program because v8 (the javascript engine) is written in c++ 
// v8 is the thing that converts javascript to machine code and is written in c++ 

// ecmascript is the standard that javascript is based on 
// different browsers started making javascript engines and little tweaks and changes between them
// the ECMA - is a standards organization that says this is hwo something should work 
// we needed a standard becasue there are many engines out there 
// v8 is actually just one of many javascript engines
// javascript is the actual language that we are writingand ecmascript is the standard that says how it is supposed to work
// if you look at docs you would see all sorts of things that javascript is supposed to have and supposed to do 
// describes javascripts behavior 
// if you were to write your own javascript engine, it should match the specification 
// v8 does that - makes sure that when you write javascript code, it compiles to machine code that matches the specification
// javascript engine - a program that converts javascript code into something the compupter processor can understand
// should follow the ecmascript standard which tells us how the language should work and what features it should have


// nodejs is a server technology 0 t is designed to be able to use javascript ot write server code

// a server is a computer that is performing services - it is just a computer and it is performing jobs that are requested of it

// the client asks for the services 

// the client makes a request for a service for some work to be performed

// and the server responds with error messages or data or verification 

// that request is in a standard format that both the client and the server are programmed to understand

// both the client and the server are computers 

// a web server is a computer connected to the internet that is accepting request to work or data 

// the standard format for requests and response are http 

// javascript is the language that the browsers have standardized on 

// chrome firefox etc - implement a javascript engine of some sort

// the goal with node js is to write javascript on teh webserver 
