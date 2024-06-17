/*
const nome = `caze`;
const sobreNome = `garcia`;

const falaNome = () => {
    console.log(nome, sobreNome);
}

// exports é o que o node exporta para os outros usuários do mesmo node
// logo temos que adicioar o que queremos 

module.exports.nome = nome;
module.exports.sobreNome = sobreNome;
module.exports.falaNome = falaNome;

console.log(module.exports);

*/

class Pessoa{
    constructor(nome){
        this.nome = nome;
    }
}