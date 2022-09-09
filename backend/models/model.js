const mongoose=require('mongoose')
var models=mongoose.model('models',{
    name:{type:String},
    position:{type:String},
})
module.exports={models}