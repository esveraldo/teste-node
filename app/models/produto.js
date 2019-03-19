const mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.connect('mongodb');

var ProdutoSchema = new Schema({
    nome: String,
    preco: Number,
    descricao: String,
});

module.exports = mongoose.model('Produto', ProdutoSchema);