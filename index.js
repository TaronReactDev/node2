require('dotenv').config()

const express = require("express");
const app = express();
const bodyParser = require('body-parser')
const Router = require('./routes');


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use('/api', Router)

app.listen(process.env.PORT, ()=>{
    console.log(`server listen http://${process.env.HOST}:${process.env.PORT}`)
})
