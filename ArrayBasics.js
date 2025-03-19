console.log("--- Arrays ---")
//String Array
let arr = ["Amal", "Bimal", "Chamal"];

//Char Array
let CharArr = ['A', 'B', 'C'];

//Integer Array
let numArr = [1, 2, 3, 4];

console.log(arr)
//Get elements using for loop
for(let i = 0; i < arr.length; i++){
	console.log(arr[i])
}

console.log(CharArr)

//Get elements using forEach loop
CharArr.forEach(n => {
	console.log(n)
})

console.log(numArr)