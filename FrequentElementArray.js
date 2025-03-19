//arr = [ 4, 8, 3, 4, 3, 2, 1, 8, 4 ]
//Find the most frequent element in the array

const arr = [4, 8, 3, 4, 3, 2, 1, 8, 4];

let frequencyMap = {};
let maxCount = 0;
let mostFrequentElement;

for (let num of arr) {
    frequencyMap[num] = (frequencyMap[num] || 0) + 1;
    if (frequencyMap[num] > maxCount) {
        maxCount = frequencyMap[num];
        mostFrequentElement = num;
    }
}

console.log(mostFrequentElement);

