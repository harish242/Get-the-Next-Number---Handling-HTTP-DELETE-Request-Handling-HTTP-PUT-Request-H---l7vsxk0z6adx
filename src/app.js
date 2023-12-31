const express = require('express');
const app = express();

//Middlewares
app.use(express.json());

// Write a GET Request to get the next number from the input 'num'.
// Endpoint : /api/get-next-num
// Return the response as {message : , status: }
app.get('/api/get-next-num',(req,res)=>{
  const{num}=req.body
  if(typeof num!=='number'||isNaN(num)){
    return res.status(200).json({status:'success'})
  }
  const nextNumber=num+1
    res.status(200).json({message:nextNumber,status:'success'})
})
    


module.exports = app;
