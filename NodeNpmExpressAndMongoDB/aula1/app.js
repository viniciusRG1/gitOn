/*

//importa tudo que está no mod1
const mod1 = require('./mod1');

/*
outra forma de importar as coisas é escolhendo quais quer
const {nome, sobreNome, falaNome} = require('./mod1');
*/

const path = require('path');
const {Pessoa} = require('./mod1');
const p1 = new Pessoa('Luiz');
console.log(p1);