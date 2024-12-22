const express=require('express');

const setupserver= async () =>{

    const app=express()

    const bodyparser=require('body-parser');
    app.use(bodyparser.json);
    app.use(bodyparser.urlencoded({extended:true}));
    const {PORT}=require('./config/serverconfig')
    app.listen(PORT,()=>{
        console.log(`the server running at ${PORT}`);
    })


}
setupserver();
