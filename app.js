// express
const express = require('express');
const app = express();
const port = 3000;




// accesso per il client
app.use(express.static('public'))




// server in attesa
app.listen(port,()=>{
    console.log(`Sono in attesa sulla porta ${port}`)
})