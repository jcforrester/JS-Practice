// function isEven(num) {
// 	if (num % 2 === 0) {
// 		return true;
// 	}
//   else{
// 	return false;
//       }
// }

function isEven(num) {
 return num % 2 === 0;
}


//factorial function
function factorial(num) {
  var result = 1;
  for (var i = 2; i <= num; i++){
    // result = result * i;
    result *= i;
  }
  return result;
};


//switches kebab to snake case

function kebabToSnake(str){
//replace all "-" with "_"
var newStr = str.replace(/-/g , "_");
return newStr;




//return str
}