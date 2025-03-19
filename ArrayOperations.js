console.log("--- Array Operations ---")

//Push and Pop 

let arr = [ 'a', 'b', 'c' ]

console.log(arr)

arr.push('e')

console.log(arr)

arr.pop()

console.log(arr)

//Reverse the array using push and Pop
//a b c d -> d c b a

let arr1 = [ 'a', 'b', 'c', 'd']
let arr3 = []

while (arr1.length > 0) {
    arr3.push(arr1.pop());
}

console.log("Reversed Array : " + arr3)

