const express = require('express');
const route = express.Router();
const homeController = require('./controllers/homeController');

function meuMiddleware(req, res, next){
    console.log('Passei no seu middleware');

}

route.get('/forms', meuMiddleware, homeController.pagInit, function(req, res, next){
    console.log("estou aqui");
});
route.post('/forms', homeController.trataPost);


module.exports = route;
