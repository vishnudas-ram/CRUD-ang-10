const express= require('express')
var router=express.Router()
var {models}=require('../models/model')

router.get('/',function(req,res){
    models.find(function(err,docs){
        if(!err){
            res.send(docs)
        }
        else{
            console.log("error in display data")
        }
    })
})

router.post('/',function(req,res){
    var emp=new models({
        name:req.body.name,
        position:req.body.position,
    })
    emp.save(function(err,docs){
        if(!err){
            res.send(docs)
        }
        else{
            console.log("error in insert data")
        }
    })
})
module.exports=router
