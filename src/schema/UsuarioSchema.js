const mongoose = require('mongoose')

const DataSchema = new mongoose.Schema({
    nome : String,
    senha : String
})

module.exports = DataSchema