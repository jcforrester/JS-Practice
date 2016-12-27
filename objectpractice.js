var movies = [
	{
	title: "Frozen",
	rating: "5",
	viewed: true 
	},

	{
	title: "Star Trek: Beyond",
	rating: "4",
	viewed: false
	},

	{
	title: "Pride and Prejudice",
	rating: "-5",
	viewed: true
	}
	]

movies.forEach(function(movie){
	var result = "You have ";
	if (movie.viewed){
		result += "watched ";
	}
	else {
		result += "not seen ";
	}
	result += "\"" + movie.title + "\" - ";
	result += movie.rating + " stars "

	console.log(result);
})