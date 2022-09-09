const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test',(err)=>
{
    if(!err){
        console.log("Database connected")
    }
    else{
        console.log("Error in connection")
    }
})
module.exports=mongoose
