var todos = [];

var input = prompt("What would you like to do?");

while (input != "quit"){

	if (input === "list"){
	listTodos();
	}

else if(input === "new"){
	newTodos();
	}

else if(input === "delete"){
	deleteTodos();
	}

input = prompt("What would you like to do?");
}

console.log("Alrighty, the app is closed. Thank you!");

function listTodos(){
	console.log("**********");
	todos.forEach(function(list, i){
		console.log(i + ": " + list);
		console.log("**********");
	});
}

function newTodos(){
	var newTodo = prompt("Enter new To Do");

	todos.push(newTodo);
	console.log("Added To Do!");
}

function deleteTodos(){
	var index = prompt("Enter index of To Do to delete:");

	todos.splice(index, 1); 
	console.log("To do Deleted!");
}

for(i = number.length; i >= 0; i--){
console.log[i];
}