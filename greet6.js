// another greeter

class Greeter{
	constructor(language){
		if (language === 'spanish'){
			this.greeting = 'hola, me llamo skyler'
		}else{
			this.greeting = 'hello, my name is skyler';
		}

		this.greet = () => {
			console.log(this.greeting);
		}
	}
}

module.exports = Greeter;