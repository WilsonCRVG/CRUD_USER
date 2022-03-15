const mongoose = require('mongoose')
const DataSchema = require('../schema/UsuarioSchema')


const usuarios = mongoose.model('Usuario',DataSchema)

module.exports = usuarios