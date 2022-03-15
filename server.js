const express = require('express')
const cookieParser = require('cookie-parser')
const cors = require ('cors')
const path = require('path')
const mongoose = require('mongoose')

const routes = require('./src/routes/routes')
const mongoDb = require('./src/database/mongoDb')

const app = express()

app.use(cors())
app.use(cookieParser())
app.use(express.json())
app.use(routes)

mongoDb.createConnection()





app.listen(3003,()=>{
    console.log('Servidor Ligado ; )-')
})