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
"use strict";
