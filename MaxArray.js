console.log("--- Maximum Number of Array ---")

let numArray = [ 5, 3, 6, 7, 9, 12, 15 ]

let maxNum = numArray[0];

numArray.forEach((n) => {
	/*
	if(n > maxNum){
		maxNum = n
	}
	*/
	(maxNum < n) && (maxNum = n)
})

console.log("Maximum Number is : " + maxNum)