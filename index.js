const express = require("express")
const app=express()
const Router = require('./Routes/Router')
const dotenv = require('dotenv');
dotenv.config()
const port = process.env.PORT
const DB = process.env.DB
const mongoose = require('mongoose')

mongoose.connect(DB)
.then(()=>{console.log('connected to mongodb...')})
.catch(()=>{console.log('not connected')})

app.use('/',Router.Router)

app.listen(port,()=>{console.log(`Listening To Port : ${port}`)})
