//CONEXÃO COM O BANCO DE DADOS

const mongoose = require('mongoose')
/*
const mongoDB = mongoose.connect('mongodb://localhost:27017/Crud_node+mongo',{
    useUnifiedTopology : true,
    useNewUrlParser : true,
    useFindAndModify : false
},(error)=>{
    try {
        console.log("COnectao ao banco")
    } catch (error) {
        console.log("erro N: " + error)
    }
})
*/


class MongoDB {
    static createConnection() {
        mongoose.connect('mongodb://localhost:27017/Crud_node+mongo', {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        }, function (err) {
            if (err) {
                console.log(err)
            } else {
                console.log('Database connected successfull !!')
            }
        })
    }

}

module.exports = MongoDB