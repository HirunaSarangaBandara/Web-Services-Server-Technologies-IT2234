//Reverse the numbers in left and right 4321-5-9876

console.log("*** Print the numbers in left to right 4321-5-9876 ***")

var i = 9
var mid = parseInt(i/2) + 1;


for(var j= mid - 1; j>0; j--)
{
	console.log(j)
}

console.log(mid);

for(var j = i; j>mid; j--)
{
	console.log(j)
}

/* Output
	*** Print the numbers in left to right 4321-5-9876 ***
	4
	3
	2
	1
	5
	9
	8
	7
	6
*/