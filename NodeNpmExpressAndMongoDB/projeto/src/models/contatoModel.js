const mongoose = require('mongoose');
const validator = require('validator');

const ContatoSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  sobreNome: { type: String, required: true, default:''},
  email: { type: String, required: true, default:''},
  telefone: { type: String, required: true},
  criadoEm: {type: Date, default: Date.now}
});

const ContatoModel = mongoose.model('Contato', ContatoSchema);

function Contato(body){
  this.body = body;
  this.errors = [];
  this.contato = null;
}

Contato.buscaPorId = async function(id){
  if(typeof id !== String) return;
  const user = await ContatoModel.findById(id);
  return user;
};

Contato.prototype.register = async function(){
  this.valida();

  if(this.errors.length > 0)return;
  this.contato = await ContatoModel.create(this.body);
};

Contato.prototype.valida() = function() {
  this.cleanUp(); // que chama a limpeza do obj
  if(this.body.email && !validator.isEmail(this.body.email)) this.errors.push('E-mail invalido');
  if(!this.body.nome) this.errors.push('nome é obrigatório');
  if(!this.body.email && !this.body.telefone){
    this.errors.push('precisa ter alguma forma de contato');
  }
}

// garantir q só tem string

Contato.prototype.cleanUp() = function(){
  for(const key in this.body){
    if(typeof this.body[key] !== 'stirng'){
      this.body[key] = '';
    }
  }

  this.body = {
    nome: this.body.email,
    sobreNome: this.body.email,
    email: this.body.email,
    telefone: this.body.email,
  }
}





module.exports = Contato;