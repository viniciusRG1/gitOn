const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');
const loginController = require('./src/controllers/loginController')
const contatoController = require('./src/controllers/contatoController');

const {loginRequired} = require('/src/middlewares/middlewares');

// Rotas da home
route.get('/', homeController.index);
// Rotas login
route.get('/login', loginController.index);
route.post('/login/register', loginController.register);
route.post('/login/login', loginController.login);
route.post('/login/logout', loginController.logout);

//rotas contatos
route.get('/contato/index', loginController, contatoController.index);
route.post('/contato/register', loginController, contatoController.register);
route.get('/contato/index/:id', loginController, contatoController.editIndex);

module.exports = route;