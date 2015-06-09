// ## The challenge:
// Create a file named function-arguments.js.
// In that file, define a function named math that takes three arguments. It's important for you to understand that arguments names are only used to reference them.
// Name each argument as you like.
// The function math should multiply the second and third arguments, then add the first argument to the outcome of the multiplication and return the value obtained.
// After that, inside the parentheses of console.log(), call the math() function with the number 53 as first argument, the number 61 as second and the number 67 as third argument.
// Check to see if your program is correct by running this command:
// javascripting verify function-arguments.js

function math(arg1, arg2, arg3) {
	var result;
	result = arg2 * arg3 + arg1;

	return result;
}

console.log(math(53, 61, 67));