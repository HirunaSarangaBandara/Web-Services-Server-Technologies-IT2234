//Async / Await 
//This is the better way to fine errors


const fs = require('fs').promises;

const readFile = async() => {

    try{
        //Second way - for execute multiple operations 
        const[Data,Data2,Data3] = await Promise.allSettled([  // If you want to find individual data status of the operations you should use "Promise.allSettled"
            fs.readFile('File.txt','utf8'),
            fs.readFile('Data.txt','utf8'),
            fs.readFile('Data2.txt','utf8') // if you put wrong path(there is no file named data2.txt) data3.status will be rejected 
              
        ])
        
        
        console.log(Data.value) // value = you will get the output
        console.log(Data2.value)
        console.log(Data)
        console.log(Data2)
        console.log(Data.status);  // status = you can get fullfilled or rejected 
        console.log(Data2.status)
        console.log(Data3.status)
 
    
    } catch (err){
      
        console.error(err);
    }

}

readFile()