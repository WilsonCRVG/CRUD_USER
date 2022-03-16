//const usuarios = require('../model/Usuario')

const Usuarios = require('../model/Usuario')


 const UsuarioHandler = {
    async index(req,res){
        const usuarios = await Usuarios.find();
        res.json(usuarios)
    },

    async detail(req,res){
        const {id} = req.params

        const usuarios = await Usuarios.findOne({id})
        res.json(usuarios)
    },

    async store (req,res){
        const {nome , senha ,id} = req.body;

        let dataCreate = {
            nome , senha , id
        }
        const usuarios = await Usuarios.create(dataCreate)
        res.json(usuarios)
    },
 
    async delete(req,res){
        const {id} = req.params

        const usuarios = await Usuarios.findOneAndDelete({id})
        
        res.json(usuarios.nome + " Deletado com sucesso ! ")
    },

    async update (req,res){
        const {id, nome , senha } = req.body;

        let dataCreate = {
            nome , senha 
        }
        const usuarios = await Usuarios.findOneAndUpdate({id},dataCreate,{new : true})
        res.json(usuarios)
    },

}


module.exports = UsuarioHandler