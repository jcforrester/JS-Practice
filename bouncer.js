var age = prompt("How old are you?");

if (age < 1) {
	console.log("Please enter a valid Age.");
}

else if (age < 18) {
	console.log("Sorry Pal, You aren't old enough.");
}

else if (age < 21) {
	console.log("Alright, You're good to go in but you can't drink.");
}

else {
	console.log("You can go in and drink.");
	
	if (age == 21) {
		console.log("Oh, and happy birthday.");
	}
}

if ((age % 2) == 1){
	console.log ("Hey! You're age is odd!");
}
