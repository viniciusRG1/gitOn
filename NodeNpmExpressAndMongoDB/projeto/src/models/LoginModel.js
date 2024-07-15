const mongoose = require('mongoose');
const validator = require('validator');
const bcryptjs = require('bcrypt');

const LoginSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true}
});

const LoginModel = mongoose.model('Home', LoginSchema);

class Login {
  constructor(body){
    this.body = body;
    this.errors = [];
    this.user = null;
  }
  
  async register(){
    this.valida(); // chama o valida
    if(this.errors.length > 0)return;
    await this.userExists();
    if(this.errors.length > 0)return;
    const salt = bcryptjs.genSaltSync();
    this.body.password = bcryptjs.hashSync(this.body.password, salt)
    this.user = await LoginModel.create(this.body);
  }

  async login(){
    this.valida();
    if(this.errors.length > 0) return;
    this.user = await LoginModel.findOne({email: this.body.email});
    if(!this.user){ this.errors.push('senha ou password errados ou não existe')}
    if(bcryptjs.compareSync(this.body.password, this.user.password)){
      this.errors.push('senha invalida');
      this.user = null;
    }
  }

  async userExists(){
   this.user = await LoginModel.findOne({email: this.body.email});
    if(this.user) this.errors.push('Usuário já existe');
  }

  valida(){
    this.cleanUp(); // que chama a limpeza do obj
    if(validator.isEmail(this.body.email)) this.errors.push('E-mail invalido');
    if(this.body.password.length < 3 || this.body.password.length > 50){
      this.errors.push.apply('senha maior que 50 ou menos que 3');
    }
  }

  // garantir q só tem string

  cleanUp(){
    for(const key in this.body){
      if(typeof this.body[key] !== 'stirng'){
        this.body[key] = '';
      }
    }

    this.body = {
      email: this.body.email,
      
    }
  }
}

module.exports = Login;