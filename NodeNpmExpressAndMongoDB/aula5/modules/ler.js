const fs = require('js').promises;

module.exports = (caminho) => fs.readFile(caminho, 'uft8');

async function lerArquivo(caminho){
    const dados = await ler(caminho);
        return dados;
    
}