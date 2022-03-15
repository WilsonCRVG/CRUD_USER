const express = require('express')
const UsuarioHandler = require('../handlers/UsuarioHandler')

const routes = express.Router()


routes.get('/',(req,res)=>{
    res.json({message : "Bem vindo ao back end node + mongo"})
})

routes.get('/usuario',UsuarioHandler.index)

module.exports = routes