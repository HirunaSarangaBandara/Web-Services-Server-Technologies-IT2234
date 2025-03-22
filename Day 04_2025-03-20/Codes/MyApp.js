const express = require('express');
const app = express();
const port = 3002;

app.get('/', (req,res) =>{
    res.send( 'Hello express js');

});

app.get('/msg', (req,res) =>{
    res.send( 'Hello IT Students');

});

app.listen(port,() => {
    console.log(`Server is running on ${port}`);
})