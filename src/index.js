const express=require('express');
const app=express()
const {PORT}=require('./config/serverconfig')
app.listen(PORT,()=>{
    console.log(`the server running at ${PORT}`);
})