const express= require('express');
const myMiddleware1 = require('./middleware/myMiddleware1');
const isAdmin = require('./middleware/isAdmin');
const {erroMiddleware, erroMiddleware2} = require('./middleware/errorhandler');
const app= express();
app.use(express.json());
app.post('/adminDashboard',myMiddleware1,isAdmin,(req,res)=>{
    res.send('Hello from Dashboard')
})
app.get('/profile',(req,res)=>{
    console.log('Hello from Profile')
})

app.use(erroMiddleware);
app.use(erroMiddleware2);
app.listen(5000,()=>{
    console.log('Server started');
})