
import express from 'express';
import homeRoute from './src/routes/homeRoute.js';

class App{
  constructor(){
    this.App = express();
    this.middlewares();
    this.routes();
  }

  middlewares(){
    this.App.use(express.urlencoded({extended: true}));
    this.App.use(express.json());
  }

  routes(){
    this.App.use('/', homeRoute);
  }

}

export default new App().App;

