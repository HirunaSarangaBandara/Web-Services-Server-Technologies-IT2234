//Arrow function

const msg = () =>{return console.log("Hello JS")}
//console.log(msg)
msg()

//Return type functions
const add = (a, b) =>{return a + b}
console.log(add(4, 5))

//Default parameters functions
const mult = (a, b = 2) =>{return a * b}
console.log(mult(4, 5))
console.log(mult(4))

//Rest parameter functions
const mysum = (...n) =>{
	console.log(n)
}

mysum(4, 5, 6, 89, 2)


//Find total of the given argument
/*
const total = (...n) =>{
	let sum = 0;
	
	n.forEach((i) => sum = sum + i)
	console.log(sum)
}

total(7, 8, 9, 10, 11)
*/

const total = (...n) =>{
	return n.reduce((sum, i) => sum = sum + i)
}

console.log(total(7, 8, 9, 10, 11))
