// express
const express = require('express');
const app = express();
const port = 3000;

// router
const postsRouter = require('./routers/postsRouter.js')

// accesso per il client
app.use(express.static('public'))

// utilizzo router
app.use('/posts', postsRouter)

// server in attesa
app.listen(port,()=>{
    console.log(`Sono in attesa sulla porta ${port}`)
})