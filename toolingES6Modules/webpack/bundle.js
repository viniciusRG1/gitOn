/*
aula 2

webpack 
para instalar as dependencias precisamos iniciar com:
     npm install --save-dev @babel/core @babel/cli @babel/preset-env babel-loader webpack 
webpack-cli core-js@2 regenerator-runtime

-w é pra assistir a qualquer modificação ele vai agir
*/
/*aula 3 */
// foorma de importar
//import { nome, sobrenome, idade, soma } from './modulo1.js';

// import { nome as nome2, sobrenome, idade, soma } from './modulo1.js';
// podemos usar as para nomear de outra forma, isso ocorre quando
// tem uma variavel com o mesmo nome no programa
// import * as meuMode from './modulo1.js' // padrão
// import mult from './modulo1.js';
// outras formas de puxar os padrões
// import mult,{nome, sobrenome, idade} from './module1.js'
// com isso podemos puxar tanto o default quanto os normais

// console.log(meuMode.soma(2,2));
