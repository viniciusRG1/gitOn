/*
aula 1

declaração literal - ocorre a function hoisting, ela pode ser declarada
em qualquer parte do código pois ela será puxada para o topo
dando a vantagem de poder chamar ela antes no código do que a sua 
declaração
function falaOI(){
    console.log(`oi`);
}

//First-class objects (Objetos de primeira classe)
// Function expression - declarar uma função em um const/variavel

const souUmDado = funcion() { 
    coinsole.log(`sou um dado`);
};
souUmDado();

funcion executarFunction(funcao){
    console.log(`vou executar sua função`);
    funcao();
};
arrow function
const funcaoArrow = () => {
    console.log(`sou uma arrow function`);
};

função dentro do objeto
const obj = {
    falar(){
        console.log(`estou falando`);
    }
};
*/
/*
aula 2

quando declaramos com function temos um array chamada arguments[] e 
todos os argumentos que for mandado será guardado, mesmo não tendo 
parametro, podemos acessar os argumento usando index

function funcao(){
    let total = 0;
    for(let argumento of arguments){
        total += argumento;
        console.log(total);
    }
}
funcao(1, 11, 111, 1111);

caso a função tenha parametros para preencher e o usuário não mande 
argumentos suficientes ele colocará undefined neles
function funcao(a, b = 0){
    b = b || 0;
    console.log(a+b)
}
funcao(1);

para assumir o valor da função devemos mandar undefined ou null
function funcao(a, b = 0){
    b = b || 0;
    console.log(a+b)
}
funcao(1, undefined);

argumentos por desestruturação

function funcao({nome, sobreNome, idade}){
   console.log(nome, sobreNome, idade);
}
const pessoa = {
    nome: `Vinicius`,
    sobreNome: `Garcia`,
    idade: 23
};

funcao(pessoa);

function conta( acumulador, ...numeros){
    for(let numero of numeros){
        console.log(numero);
        acumulador += numero;
    }
    console.log(acumulador);
}

conta(0, 20, 30, 40, 50);
*/
/*
aula 3
return - retorna um valor que é necessário em outro lugar, o retorno pode
ser qualquer coisa para poder ser guardada ou ultilizada
function soma(a, b){
    return a + b;
}

let valor = soma(2,3);

funções sem retorno serve para uma ação, ela n é feita com pretenção 
de dar uma resposta, apenas de fazer uma ação, como por exemplo abaixo
que só quer mostrar o resultado 
function soma2(a,b){
    console.log(a + b);
}

podemos retornar uma função e depois usar a variavel que guarda essa 
função para acessar a função interna a função primária

function falaFrase(comeco){
    function falaResto(resto){
        return comeco + ` ` + resto;
    }
    return falaResto;
}

const fala = falaFrase(`Olá`);
const resto = fala(`mundo`);
console.log(resto);
*/
/*
aula 4

escopo lexico - conhece tudo dentro que está dentro dela e envolta
caso tenha nomes ela pegará aque tem nome igual e mais próxima 
de onde foi criada, exemplo:

const nome = `Vinicius`;

function falaNome(){
    console.log(nome);
}

function usaFalaNome(){
    falaNome();
}

usaFalaNome();

sairá `Vinicius` por ser o único 

const nome = `Vinicius`;

function falaNome(){
    const nome = `cazé`;
    console.log(nome);
}

function usaFalaNome(){
    falaNome();
}

usaFalaNome();

sairá `cazé` por estar dentro do escopo, logo mais próximo


const nome = `Vinicius`;

function falaNome(){
    console.log(nome);
}

function usaFalaNome(){
    const nome = `cazé`;
    falaNome();
}

usaFalaNome();

sariá `vinicius por estar mais próximo`
*/

/*
 aula 5

 closures - é uma habilidade de acessar uma variavel que está dentro de
 return função

  function retornaFuncao(nome1 ){
    const nome = `vinicius`;
    return function (){
        return nome + nome1;
    };
 }

 const funcao = retornaFuncao(` Garcia`);
 console.log(funcao());
 */
/*
aula 6

função callback

function rand(min = 1000, max = 3000){
    const num = Math.random() * (max - min) + min;
    return Math.floor(num);
}

function f1(callback){
    setTimeout(function(){
        console.log(`f1`);
        f2();
        if(callback) callback();
    }, rand());
}
function f2(callback){ 
    setTimeout(function(){
        console.log(`f2`);
        f3();
        if(callback) callback();
    }, rand());
}
function f3(callback){
    setTimeout(function(){
        console.log(`f3`);
        console.log(`olá mundo`);
        if(callback) callback();
    }, rand());
}


// isso é um callback, poder chamar um dentro do outro, callback executa
// oque estiver escrito 
f1(function(){
    f2(function(){
        f3()
    });
});
*/

/*
aula 7

IIFE -> immediately invoked function expression
quando sua função cria uma execução direta só q sem tocar o campo global
inclusive usando o mesmo nome 

(function() {
    const SobreNome = `Garica`;

    function criaNome(nome){
        return nome + ` ` + SobreNome;
    }

    function falaNome(){
        console.log(criaNome(`Vinicius`));
    }

    falaNome();
})();

a forma padrão de escrita de uma IIFE é:
(function(){

})();

dentro desse espaço criado pode se escrever de tudo
*/

/*
aula 8

factory function

//usando um atributo que está dentro da struct, n precisando estar no 
//escopo

function criaPessoa(nome,sobreNome){
    return {
        nome,
        sobreNome,
        fala: function(assunto){
            return `${this.nome} esta ${assunto}`
        },
    };
}

const p1 = criaPessoa(`vinicius`, `garcia`);
console.log(p1);
console.log(p1.fala(`falando sobre JS`))

// usando escopo direto


function criaPessoa1(nome, peso, altura){
    return {
        fala: function(assunto){
            return `${nome} esta ${assunto}`
        },
        imc(){
            const indice = peso/(altura ** 2);
            return indice.toFixed(2);
        }
    };
}

//podemos transformar a função em um psiceudo atributo

function criaPessoa2(nome, sobreNome, p, a){
    return {
        nome,
        sobreNome,
        fala: function(assunto){
            return `${nome} esta ${assunto}`
        },
        altura: a,
        peso: p,
        get imc(){
            const indice = this.peso/(this.altura ** 2);
            return indice.toFixed(2);
        },
        set nomeCompleto(nomeInteiro){
            console.log(nomeInteiro);
        }

    };
}

const p11 = criaPessoa1(`vinicius1`, `garcia1`, 88, 187);
const p111 = criaPessoa2(`vinicius1`, `garcia1`, 88, 187);
console.log(p11);
console.log(p1.fala(`falando sobre JS`))
console.log(p11.imc());
console.log(p111.imc);
p111.nomeCompleto = p111.nome + p111.sobreNome;
*/

/*
aula 9 

função construtura -> obj
tem que ser criada com a primeira letra maiuscula e utiliza do new
ex:
    Pessoa (new)

// const dentro do contrutor não pode ser acessado do lado de fora,
// chamada de privados

function Pessoa(nome,sobreNome){
    this.nome = nome;
    this.sobreNome = sobreNome;

    this.metodo = function(){
        console.log(`o método foi ativado`)
    }
}
const p1 = new Pessoa(`Vinicius`, `Cazé`);
console.log(p1.nome + ` ` + p1.sobreNome);

// new cria um obj vazio que será recheado com a construção escolhida

*/

/*
aula 10
    funções recursiva - funções que se chamam

function somaN(somador, N){
    console.log(`falta `+ N + ` somas`);
    console.log(somador);
    somador += N;
    if(N <= 0 ){
        return 0;
    }
    somaN(somador, N-1);
}

somaN(10,10);

*/
/*
aula 11

funções geradoras - código que pode ser pausado

function* geradora1(){
    //código da primeira chamada
    
    yield `Valor 1`;
    //código da segunda chamada

    yield `Valor 2`;
    //código da terceira chamada

    yield `Valor 3`;
}

const g1 = geradora1();
console.log(g1); // mostra oque foi guardado
console.log(g1.next()); //pula pro primeiro yield
console.log(g1.next().value); //pula pro próximo yield e mostra o valor

//podemos usar iteração como for e usando a função como se fosse array

//gera infinitos números, 1 por vez que for chamado
function* geradora2(){
    let i = 0;

    while(true){
        yield i;
        i++;
    }
}

function* geradora3(){
    yield 0;
    yield 1;
    yield 2;
}

//podemos usar funções dentro dela
function geradora4(){
    yield* geradora3();
}
*/
/*
aula 12 

relembrando array

const nome = [`Eduardo`, `Maria`, `Joana`];
nome[2] = `Carlos`;
console.log(nome);
delete nome[0];
console.log(nome);

const nome = [`Eduardo`, `Maria`, `Joana`];
nome[2] = `Carlos`;
console.log(nome);
const removido = nome.shift();
console.log(removido);

const nome = [`Eduardo`, `Maria`, `Joana`];
nome[2] = `Carlos`;
console.log(nome);
nome.push(`Pedro`);
nome.push(`Segovinha`);
console.log(nome);
nome.unshift(`Eduardo`);
console.log(nome);
const novo = nome.slice(0, 3);
console.log(novo);
const frase = `Oi como vc esta`;
const fraseSeparada = frase.split(` `);
console.log(fraseSeparada);
*/ 

/*
aula 13

const nomes = [ 'Eduardo', 'Eduardo', 'Maria', 'Carlos', 'Pedro', 'Segovinha' ];

// splice retorna as palavras retiradas como array 

const removidos =  nomes.splice(3, 2);
console.log(nomes, removidos);

// é possivel usar números negativos q faz as contas de trás pra frente
// é divido como local que quer remover = X e quantos = Y slice(X, Y)

nomes.splice(3, 0, `Luiz`);
console.log(nomes);

// a terceira variavel é oque queremos adicionar, começando pelo primeiro
//argumento
*/

/*
aula 14 

const numeros1 = [1,2,3];
const numeros2 = [4,5,6];
const numeros3 = numeros1 + numeros2; //forma errada, vira uma string
console.log(numeros3);
const numeros4 = numeros1.concat(numeros2);
console.log(numeros4); // forma correta, continua sendo números
const numero5 = [...numeros1,...numeros2, ...[7,8,9]]; //outra forma
// correta de usar
console.log(numero5);
*/

/*
aula 15


const numeros = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

// função base pra utilizar com o filter

function callbackFilter(valor){
    if(valor > 10){
        return true;
    }else{
        return false;
    }
}

const numeros1 = numeros.filter(callbackFilter);

console.log(numeros1);

// pode ser melhor escrito como 

const numeros2 = numeros.filter(valor => valor > 10);
console.log(numeros2);

const pessoas=[
    {nome: `Pedro`, idade:20},
    {nome: `Jedros`, idade:33},
    {nome: `Ledro`, idade:24},
    {nome: `Yedros`, idade:45},
    {nome: `Zedro`, idade:26},
    {nome: `Vedrosa`, idade:57},
];

const pessoaComNomeGrande = pessoas.filter(function (obj) {
    return obj.nome.length > 5;
});
console.log(pessoaComNomeGrande);

const pessoaComNomeGrande1 = pessoas.filter(obj =>  obj.nome.length > 5);

console.log(pessoaComNomeGrande1);

const idadeComMaisDe40 = pessoas.filter(obj => obj.idade > 40);

console.log(idadeComMaisDe40);

const terminaComA = pessoas.filter(obj => obj.nome.toLowerCase().endsWith(`a`));

console.log(terminaComA);
*/

/*
aula 16 

//map sempre tem o mesmo tamanho do original, maps serve pra trocar
// os valores

const numeros = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
const numeroEmDobro =numeros.map(function (valor, indice, array){
    return valor*2;
});

console.log(numeroEmDobro);


serve para poder pegar informações de obj separadamente

const pessoas=[
    {nome: `Pedro`, idade:20},
    {nome: `Jedros`, idade:33},
    {nome: `Ledro`, idade:24},
    {nome: `Yedros`, idade:45},
    {nome: `Zedro`, idade:26},
    {nome: `Vedrosa`, idade:57},
];

const nomes = pessoas.map(function(valor){
    return valor.nome;
})

console.log(nomes);

const comId = pessoas.map(function(obj, indice){
    obj.id = (indice + 1) * 1000;
    return obj;
});

ou 

const comId = pessoas.map(function(obj, indice){
   const newObj = {...obj};
   newObj.id = indice;
   return obj;
});
*/

/*
aula 17
reduce serve para reduzir os valores 

//diferente dos map e filter, ele tem mais uma função que seria o 
//acumulador 
const numeros = [5,50,80,1,2,3,4];
const total = numeros.reduce(function(acumulador, valor){
    acumulador += valor
    return acumulador;
}, 0);
console.log(total);
// dessa forma ele soma e reduz em um elemento 

const total1 = numeros.reduce(function(acumulador, valor){
    if(valor % 2 === 0){
        acumulador += valor;
    }
    return acumulador;
});

console.log(total1);

*/

/*
aula 18


const a1 = [1,2,3,4,5];

a1.forEach(function(valor, indice, array){
    console.log(valor);
});

//faz um for até o fim do array
*/

/*
aula 19


*/

