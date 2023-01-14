const express = require('express');
const app = express();
const path=require('path')
const PORT=3000;

app.listen(PORT,()=>console.log('Servidor corriendo en puerto '+ PORT))

app.use(express.static(path.resolve(__dirname,'./public')));

app.get('/',(req,res)=> res.sendFile(path.resolve(__dirname,'./views/index.html')))
app.get('/login',(req,res)=> res.sendFile(path.resolve(__dirname,'./views/login.html')))
app.get('/register',(req,res)=> res.sendFile(path.resolve(__dirname,'./views/register.html')))