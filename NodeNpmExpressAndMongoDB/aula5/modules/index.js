const fs = require('fs').promises;
const path = require('path');
const caminhoArquivo = path.resolve(__dirname,'..', 'text.json');
const ler = require(caminhoArquivo);

const pessoas = [
    {nome: 'Pedro'},
    {nome: 'Paulo'},
    {nome: 'pichain'},
    {nome: 'joão'}
];

const json = JSON.stringify(pessoas, '', 2);

fs.writeFile(caminhoArquivo, json, {flag: 'w', encoding: 'utf8'});

module.exports = (caminho) => fs.readFile(caminho, 'uft8');

async function lerArquivo(caminho){
    const dados = ler;
        return dados;
    
}

console.log(lerArquivo(caminhoArquivo));