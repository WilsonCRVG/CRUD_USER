const express = require('express')
const UsuarioHandler = require('../handlers/UsuarioHandler')

const routes = express.Router()


routes.get('/',(req,res)=>{
    res.json({message : "Bem vindo ao back end node + mongo"})
})

routes.get('/usuario',UsuarioHandler.index)
routes.post('/usuario',UsuarioHandler.store)
routes.get('/usuario/:id',UsuarioHandler.detail)
routes.delete('/usuario/:id',UsuarioHandler.delete)
routes.put('/usuario/',UsuarioHandler.update)

module.exports = routes