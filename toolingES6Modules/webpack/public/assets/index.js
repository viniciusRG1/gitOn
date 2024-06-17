/*
    aula 1

    babel é um conversor para todo quais quer navegador antigo
    podemos instalar usando:
        npm init -y
        npm install @babel/cli @babel/core @babel/preset-env
        npm install --save-dev  @babel/cli @babel/core @babel/preset-env

    const nome = `vinicius`;
    const obj = {nome};

    const novoObj = {...obj};   
    console.log(novoObj);

    criar um arquivo novo com o código novo
    npx babel index.js -o bundle.js --presets=@babel/env

    podemos automatizar essa ação colocando um script no package
    só ir em scripts e colocar o seguinte código:
    "babel ./index.js -o ./bundle.js --presets=@babel/env -w"

    para ativar vc usa o terminal com:
        npm run converte

    const nome = `vinicius`;
    const outroNome = `caio`;
    const obj = {nome, outroNome};

    const novoObj = {...obj};   
    console.log(novoObj);
*/
const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);
const geraMaiuscula = () => String.fromCharCode(rand (65, 91));
const geraMinuscula = () => String.fromCharCode(rand (97, 123));
const geraNumero = () => String.fromCharCode(rand (48, 58));
const simbolos = ',.;~^[{]}/?!@#$%¨&*()-_=+';
const geraSimbolos = () => simbolos[rand(0, simbolos.length)];

function geraSenha(qtd, maiusculas, minuscula, numero, simbolos){
    const senhaArray = [];
    qtd = Number(qtd);
    for(let i = 0; i <= qtd; i++){
        maiusculas && senhaArray.push(geraMaiuscula());
        minuscula && senhaArray.push(geraMinuscula());
        numero && senhaArray.push(geraNumero());
        simbolos && senhaArray.push(geraSimbolos());
    } 
    return senhaArray.join('').slice(0,qtd);
}
