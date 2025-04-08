const fs = require('fs').promises;

const readFile = async () => {
    try {

        const data = await fs.readFile('File.txt', 'utf8');
        console.log(data); 

    } catch (err) {

        console.error(err);
        
    }
};

readFile();