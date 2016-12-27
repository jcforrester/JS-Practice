var kittens  = ["kitten 1" , "kittten 2" , "kitten 3", "kitten 4"]

function printKitty() {
	for (var i = kittens.length -1; i >= 0; i--){
		console.log(kittens[i]);
	}
}

printKitty();




console.log("*****************NEXT!!!!********************");




var compare = [1,1,1,1];

function printComp(){
	var first = compare[0];

	for (var i = 1; i < compare.length; i++){
		if (first != compare[i]){
			return false;
		}
	}

	return true;

}

console.log(printComp());

console.log("*****************NEXT!!!!********************");

var sum = [5, 7, -2];

function adding(){
	var total = 0;

	for (var i = 0; i < sum.length; i++){
		total = sum[i] + total;
	}
	return total;
}

console.log(adding());

console.log("*****************NEXT!!!!********************");

var maxNum = [1, 2, 30, 4, 5];


function maximum() {
	var max = maxNum[0];

	for (var i = 0; i < maxNum.length; i++){
		if (maxNum[i] > max){
			max = maxNum[i];
		}
	}
	return max;
}

console.log(maximum());
