const express= require('express')
const bodyParser= require('body-parser')
const cors=require('cors')

var control=require('./controllers/control')
const {mongoose}= require('./database')
var app=express()

app.use(bodyParser.json())
app.use(cors({origin:'http://localhost:4200'}))

app.listen(3000,function(){
    console.log("Server started at port 3000")
})
app.use('/control',control)