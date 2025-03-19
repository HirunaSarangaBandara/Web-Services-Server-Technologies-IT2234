console.log("--- Nested Array ---")

let NesArr = [[1, 2, 3], [5, 7, 3], [8, 6]]

//Using foreach Loop
/*
NesArr.forEach((n) => {
		console.log(n)
})
*/

NesArr.forEach((n) => {
	n.forEach((i) => {
		console.log(i)
	})
})