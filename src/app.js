const express = require('express');
const app = express();

//Middlewares
app.use(express.json());

// Write a GET Request to get the next number from the input 'num'.
// Endpoint : /api/get-next-num
// Return the response as {message : , status: }
app.get('/api/get-next-num',(req,res)=>{
  const{num}=req.body
  if(num){
    return res.json({message:num+1,status:'success'})
  }
  res.json({status:'failure'})
})


module.exports = app;
