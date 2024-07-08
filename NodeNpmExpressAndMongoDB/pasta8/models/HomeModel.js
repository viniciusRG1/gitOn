exports.paginaInicial = (req, res) => {
    res.render('index', {
        titulo: 'este é a página',
        numeros: [0, 1 , 2, 3, 4]
    });
    return;
}

const mongoose = require('mongoose');

const HomeSchema = new mongoose.Schema({
    titulo: {type: String, required: true},
    descricao: String
});

const HomeModel = mongoose.model('Home', HomeSchema);

module.exports = HomeModel;

//express-session connect-mongo connect-flash 
