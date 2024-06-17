/*
para poder usar modulos precisamos de adicionar 
"type": "module" 
pois se não da erro
*/

export const nome = `cazé`;
export const sobrenome = `garcia`;
export const idade = 30;

export function soma(x, y){
    return x + y;
}
// será colocado no independente do nome que você coloque nele
export default (x,y) => x * y;
// forma de exportar 
// export { nome, sobrenome, idade, soma };

/*
podemos exportar da seguinte forma 
isso é uma exportação direta

export const nome = `cazé`;
export const sobrenome = `garcia`;
export const idade = 30;

export function soma(x, y){
    return x + y;
}

export class Pessoa{
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome= sobrenome;
    }
}
*/

