const usuarios = require('../model/Usuario')
const Usuarios = require('../model/Usuario')


 const UsuarioHandler = {
    async index(req,res){
        const usuarios = await Usuarios.find();
        res.json(usuarios)
    }
}


module.exports = UsuarioHandler