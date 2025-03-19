//Write a boolean function to find a given number is prime.

function prime(num){
	
	if(num <= 1)
		return false;
		
		//Check from 2 to n-1
		for(let i = 2; i < num; i++)
			if(num % i == 0)
				return false;
		
		return true;
	
}

console.log(prime(2))
console.log(prime(9))