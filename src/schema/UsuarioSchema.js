const mongoose = require('mongoose')

const DataSchema = new mongoose.Schema({
    nome : String,
    senha : String,
    id : Number
})

module.exports = DataSchema