let budget = 75;
let keyboards = [40, 50, 60, 70];
let mouses = [5, 10, 15];

let keyboard = []; 
let mouse = []; 

let maxAmount = -1; 
console.log("Budget: " + budget);

for (let i = 0; i < keyboards.length; i++) {
    for (let j = 0; j < mouses.length; j++) {
        let totalCost = keyboards[i] + mouses[j];
        if (totalCost <= budget && totalCost > maxAmount) {
            maxAmount = totalCost;

            if (!keyboard.includes(keyboards[i])) {
                keyboard.push(keyboards[i]);
            }

           
            if (!mouse.includes(mouses[j])) {
                mouse.push(mouses[j]);
            }
        }
    }
}

console.log("Keyboard Prices: [" + keyboard + "]");
console.log("Mouse Prices: [" + mouse + "]");
console.log("Return: " + maxAmount);