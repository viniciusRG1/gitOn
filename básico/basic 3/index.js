/*
aula 1
console.log('Vinicius Resende Garcia');

console.log(`Vinicius 'Resende' "Garcia"`);

console.log(1234, 5678, 15.16, `Vinicius`);

console.log(`Meu nome é "Vinicius Resende Garcia". Estou aprendendo JavaScript às`, 10, `da manhã`);
*/

/*
aula 2
let nome = 'João'; // var é a msm coisa por enquanto porém é mais antigo

console.log(nome, 'Vitor');

let outroNome; // inicião com valor indefinido
outroNome = 'Pedro'; // e poedmos declarar outro futuramente
*/

/* 
aula 3

const nome = 'João'; // const n pode ser modificado, porém ela deve ser iniciada com valor.

console.log(nome, 'estuda na UFU');

const numberOne = 1;
const numberTwo = 2;
const resultadoConta = numberOne * numberTwo;
let resultadoMaisCinco = resultadoConta + 5;

console.log(resultadoConta);
console.log(resultadoMaisCinco);
console.log(typeof(numberOne)); //typeof serve para poder reconhecer o tipo que é a variavel/const

*/
/* 
exercício 1


*/
/* 
const nome = 'Vinicius';
const sobreNome = 'Resende Garcia';
let idade = 23;
let peso = 90.7;
const alturaEmM = 1.87;
let IMC = peso / alturaEmM;
let anoDeNascimento = 2024 - idade;

console.log(nome, sobreNome, 'tem', idade, ', pesa', peso, 'tem', alturaEmM, 'de altura e seu IMC é de', IMC, 'e nasceu em', anoDeNascimento);
*/

/*
aula 4
+ -> adição/concatenação
- / * -> subtração / divisão / multiplicação
% -> resto da divisão
** -> potencia
a precendencia dos operadores são:
() -> ** -> * -> / -> % -> + -> -
os parenteses dão a prioridade a um conjunto de instruções
++valor é diferente na forma de somar que valor++ mesmo tendo o resultado igual
no primeiro ele soma e depois mostra o valor e no segundo tem primeiro a mostragem
e depois a soma 
let valor = 1;
console.log(valor++); // resultado 1
console.log(++valor); // resultado 3
podemos decrementar na mesma ideia fazendo 
valor-- ou --valor
NaN -> not a number // erro simples e fácil de resolver 
formas de conversão de String para number
const num1 = 10;
const num2 = Number('5'); 
console.log(num1 + num2)
e o tipo de num2 será number
caso queira um tipo de number específico podemos usar parseInt ou parseFloat
*/
/*
aula 5

comando existentes apenas em navegador
alert:
    alert('olá pessoal');
não tem retorno de valor 
window.confirm:
    window.confirm('deseja finalizar o processo?');
o window.confirm retorna um valor boolean
window.prompt:
    window.prompt('quando você nasceu?'); 
ele pedirar um valor que será retornado para o console
podemos usar esses comandos sem a necessidade de usar o windows com prefixo
*/

/*
exercício 2

let letraA = 'A';
let letraB = 'B';
let letraC = 'C';

let aux = letraA;

letraA = letraB;
letraB = letraC;
letraC = aux;


//[letraA, letraB, letrac] = [letraB, letraC, letraA];

console.log(letraA, letraB, letraC);

são duas formas de resolver o problema
*/

/*
aula 6

escrever qualquer caracter especial usamos \, a primeira barra ele sempre
transformará o próximo caracter especial em um comum
console.log("oi usei \"\"");
string começam a ser contadas pelo 0, podemos achar um valor específico
dentor da Stirng usando charAt()
console.log(string.charAt(8));
uma outra forma de concatenar String seria:
    console.log(`${umaString} em um lindo dia`);

    let String = "um texto";
formas de encontrar um valor dentro da string
console.log(String.indexOf('texto'));
a mesma coisa da anterior porem começando de um ponto
console.log(String.indexOf('x', 3));
começando do fim 
console.log(String.lastIndexOf('um'));
começando de um ponto e indo até o index 0
console.log(String.lastIndexOf('m', 5));
outra forma e aceita expressão regular
console.log(String.search(/x/));

muda valores da string
console.log(String.replace(/um/, 'outro'));

retorna o tamanho da string;
console.log(String.length);

inicia de um ponto determinado
console.log(String.slice(-3));
outra forma de utilizar
console.log(String.slice(5));

é uma forma de separar a string com base em um padrão
console.log(String.split('t'));
podemos colocar um limite pra essa lista
console.log(String.split('t', 3));
*/

/* 
exercício 3
let nome = window.prompt(`seu nome é?`);
console.log(`seu nome é `, nome);
console.log(`seu nome tem `, nome.length, `letras`);
console.log(`a segunda letra do seu nome é `, nome.charAt(1));
//consele.log(`o primeiro indice do seu nome é `, nome.lastIndexOf(`v`, 10));
console.log(nome.split(` `, 3));
console.log(`seu nome maiusculo ficaria `, nome.toUpperCase());
console.log(`seu nome em minusculo ficaria `, nome.toLowerCase());
*/ 

/*
aula 7

let num1 = 10.1234567689; //number 
let num2 = 2.5; //number
//toString transforma o number em string apenas naquele momento.
console.log(num1.toString() + num2);
//dessa forma podemos mudar definitivamente
//num1 = num1.toString;
//toFixed coloca limite de casa decimais
console.log(num1.toFixed(2));
//verificar se é inteiro
console.log(Number.isInteger(num1));
//verificar se é um note a number (NaN)
console.log(Number.isNaN(num1));
//a jv tem uma imprecisão nos números fracionados devido ao IEEE 
num1 = 0.7;
num2 = 0.1;
// a soma deles deveria dar 0.8 porem dara 0.7999999
//forma 1 de resolver porém não será um inteiro
num1 += num2;
num1 += num2;
num1 += num2;
console.log(num1.toFixed(2));
console.log(Number.isInteger(num1));
//forma 2 e sendo um inteiro
num1 = 0.7;
num2 = 0.1;
num1 = ((num1 * 10)+(num2 * 10)/10);
num1 = ((num1 * 10)+(num2 * 10)/10);
num1 = ((num1 * 10)+(num2 * 10)/10);
console.log(num1.toFixed(2));
console.log(Number.isInteger(num1));

*/ 

/*
aula 8

let num1 = 9.54578;
//floor arredonda pra baixo
let num2 = Math.floor(num1);
console.log(num2);
//ceil arredonda pra cima
num2 = Math.ceil(num1);
console.log(num2);
//arredonda para o inteiro mais próximo possivel
num2 = Math.round(num1)
console.log(num2);
//maior valor
console.log(Math.max(1,2,3,4,5,6,7,8,9,10));
//menor valor
console.log(Math.min(1,2,3,4,5,6,7,8,9,10));
//numero random até 1
console.log(Math.random());
//numero random dentro de um intervalo
console.log(Math.random() * (10-5)+5);
//numero random dentro de um intervalo e inteiro
console.log(Math.round((Math.random() * (10-5)+5)));
//extrair a raiz
console.log(num1 ** 0.5);
//pode dividir por 0, será o tipo infinity e será um true
*/

/*
exercício 4
let numero = window.prompt(`escolha um número`);
console.log(`raíz quadrada: `, (numero ** 0.5));
console.log(numero,` é inteiro ? `, Number.isInteger(numero));
console.log(`arredondando para baixo`, Math.floor(numero));
console.log(`arredondando para cima `, Math.ceil(numero));
console.log(`com duas casas decimais`);
console.log(numero.toFixed(2));
*/

/*
aula 9
// array aceita qualquer valor que seja valido
// cada string tem um indice
const alunos = [`Luiz`, `Maria`, `João`];
console.log(alunos[0]);
// e dentro cada letra tem seu indice
console.log(alunos[0][1]);
// modificação direta
alunos[0] = `Carlos`;
// adição de membros de forma direta
alunos[alunos.length] = `cecilia`; 
console.log(alunos[0]);
console.log(alunos[3]);
//adição de forma correta no final
alunos.push(`Pedro`);
console.log(alunos);
//adição no começo 
alunos.unshift(`Fabio`);
console.log(alunos[0]);
//remoção no final e o retornando
let removido = alunos.pop();
console.log(alunos);
console.log(removido);
//remoção no inicio
let removidosInicio = alunos.shift();
console.log(alunos);
console.log(removidosInicio);
//remover uma posição específica, o problema é que ficará um espaço vazio
delete alunos[1];
console.log(alunos);
//fatiar a lista
console.log(alunos.slice(0,4));
//o tipo dele é um objeto
// instanceof é um modo de ver se algo é alguma coisa
*/

/*
aula 10

//dessa forma a função não retorna nada
function salve(nome){
    console.log(`olá ${nome}`);
}

//dessa forma tem retorno
function salve(nome){
    return `Bom dia ${nome}`
}

const fraseDoDia = salve(`vinicius`);
console.log(fraseDoDia);

//função de conta

function soma(valor1, valor2){
    const resultado = valor1 + valor2;
    return resultado;
}

const valorDoDia = soma(2,2);
console.log(valorDoDia);
*/

/*
aula 11

//objeto é um consjunto de informações sobre um mesm assunto
//forma padrão de um objeto
const clienteTeste = {
    nome: `Vinicius`,
    sobrenome: `Garcia`,
    idade: 23
};

console.log(clienteTeste);

//usando função para facilitar a criação de objeto do tipo cliente.
function criaCliente(nome, sobrenome, idade){
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade,
        fala(){
        console.log(`olá eu sou o ${this.nome}`);
        },
        incremento(){
            this.idade++;
            console.log(`eu tenho atualmente ${this.idade}`)
        }
    };
}

const clienteTeste2 = criaCliente(`Cazé`, `José`, 22);

console.log(clienteTeste2);
console.log(clienteTeste2.fala());
console.log(clienteTeste2.incremento());
*/

/*
aula 12

valores por referencia, é como se em jv todos estivessem sempre com 
ponteiros

// em todos os casos, alteração em um indica alteração em outro
let a = [1,2,3];
let b = a;
console.log(a, b);

a.push(4);
console.log(a, b);

b.pop();
console.log(a, b);
//pois a e b estãoa pontando para a mesma celula de memória

//a forma de copiar o array de forma independente é:
let c = [...a];
a.push(4);
console.log(a, b, c);

//pode ser usado com objeto

const objA = {
    nome:`Vinicius`,
    sobrenome:`Garcia`
};
const objB = {...objA};

a.nome = `João`;
console.log(objA, objB);
*/

/*
execício 5

function meuEscopo(){
    const form = document.querySelector(`.form`);
    const resultado = document.querySelector(`.resultado`);

    const pessoas = [];

    function recebeEventoForm (evento){
        evento.preventDefault();

       const nome = form.querySelector(`.nome`);
       const sobrenome = form.querySelector(`.sobrenome`);
       const peso = form.querySelector(`.peso`);
       const altura = form.querySelector(`.altura`);
        pessoas.push({
            nome: nome.nodeValue,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        });

    }

    console.log(pessoas);

    resultado.innerHTML += `<p>${noem.value} ${sobrenome.value} ${peso.value} ${altura.value} </p>`;
}
meuEscopo();
*/

/*
aula 13

comparação

>
>=
<
<=
== -> igualdade (valor)
=== -> igualdade estrita (valor e tipo) 
!= -> diferente (valor)
!== -> diferente estrito (valor e tipo)
é recomendado usar os estrito
*/

/*
aula 14

operadores lógicos

&& -> AND -> as duas coisas devem acontecer
|| -> OR -> pelo menos uma deve acontecer
! -> NOT -> inverte o valor

var Tru = true;
var fal = false;

console.log(Tru && Tru || fal);

console.log(!true);

*/

/* 
aula 15

avaliação curto-circuito -> se o primeiro valor && der falso, já finaliza
a procura, o && aceita somente o true, então os falores FALSY não são 
aceitos
FALSY:
    0
    '' " " ` `
    null/ undefined
    NaN

    function falaoi(){
    return `oi`;
}
console.log('joão' && falaoi());

só funcionará se for uma String true, caso por FARSY dará erro

em OR podemos usar para selecionar a primeira situação que for true

const corUsu = null;
const corPadrao = corUsu || `preto`;
console.log(corPadrao);

*/ 

/*
aula 16

if -> se for verdadeiro faz isso
else if -> caso o anterior for falso, teste isso
else -> se tudo for falso até agora, faça isso

pode ser usado juntamente com os operadores lógicos

const numero = 10;

if(numero >= 0 && numero <= 5){
    console.log(`o número está entre 0 e 5`);
}else{
    console.log(`o número NÃO está entre 0 e 5`)
}

tem que tomar cuidado para não fazer uma condição que sempre será verdade 
pra inutilizar os outros else if

*/
/*
aula 17

alternador ternária
é um if else mais rápido ? :

const ponto = 1000;

if(ponto >= 1000){
    console.log(`usuário VIP`);
}else{
    console.log(`usuário normal`);
}

um é igual ao outro

const nivelUsu = ponto >= 1000 ? `usuário VIP` : `usuário normal`;
console.log(nivelUsu);
*/

/*
aula 18

data

const data = new Date();
console.log(data.toString()); // pega o tempo atual

caso use Date(0) mostrará dia 1/1/1970

const data = new Date(2023, 0, 16, 12, 58, 0, 0); // assim podemos dar
uma data específica

const data = new Date(2023, 0, 16, 12, 58, 0, 0);
console.log(`Dia`, data.getDate()); // dia
console.log(`Mês`, data.getMonth()); // mês
console.log(`Ano`, data.getFullYear()); // ano
console.log(`Hora`, data.getHours()); // horas
console.log(`Min`, data.getMinutes()); // minutos
console.log(`Seg`, data.getSeconds()); // segundos
console.log(`Dia da semana`, data.getDay()); // dia da semana
console.log(data.toString()); //data de criação
console.log(Date.now()); // dá os mili segundos e pode ser usada
//para mostrar o tempo atual 

forma de pegar as informações de data

function formataData(data){
    const dia = data.getDate() + 1; // dia
    const mês = data.getMonth(); // mês
    const ano = data.getFullYear(); // ano
    const hora = data.getHours(); // horas
    const min = data.getMinutes(); // minutos

    return `${dia} / ${mês} / ${ano} / ${hora} / ${min}`;
}

const data = new Date ();
const dataBrasil = formataData(data);
console.log(dataBrasil);

*/

/*
aula 19

const data = new Date();
const diaSemana = data.getDay();
let diaSemanaTexto;
console.log(diaSemana);

switch (diaSemana){
    case 0: 
        diaSemanaTexto = `Domingo`;
        break;
    case 1:
        diaSemanaTexto = `Segunda`;
        break;
    case 2:
        diaSemanaTexto = `Terça`;
        break;
    case 3: 
        diaSemanaTexto = `Quarta`;
        break;
    case 4:
        diaSemanaTexto = `Quinta`;
        break;
    case 5:
        diaSemanaTexto = `Sexta`;
        break;
    case 6:
        diaSemanaTexto = `Sábado`;
        break;
    default:
        diaSemanaTexto = ` `;
        break;
}

console.log(diaSemanaTexto);
*/

/*
aula 20

let ele te valor dentro do bloco, ou seja, caso vc declare ela 2 vezes 
durante o código, ela será 2 vezes criada, e será usada o da separação 
de bloco mais próximo, mas um variavel criada em um scoop bloco não será 
aceita fora

var tem escopo por função e quando vc pode criar ela uma vez e na próxima
vez que tentar criar ela apenas redeclarar, dentro da função ela agirá
como se fossse global

var nome = `Vinicius`; // criando
let nome1 = `Cazé`; // criando
console.log(nome, nome1);
if(true){
    var nome = `Ana`; // criando
    let noem1 = `Laura`; // redeclarando
    console.log(nome, nome1);
}
    
}
*/

/*
aula 21

atribuição por destruturação é pegar um array com valores e atribuir cada
valor desse array a uma variavel 

let a;
let b;
let c;

const letras = [`a`, `b`, `c`];
[a,b,c] = letras;
console.log(a,b,c);

se tiver menos ìndice na distribuição do que no array origem podemos 
fazer duas coisas:
1 - pegar só o X primeiros valores
let a;
let b;

const letras = [`a`, `b`, `c`];
[a,b] = letras;
console.log(a,b); // a, b
2 - podemos pegar os X primeiros separadamente e depois criamos outro
array para o resto
let a;
let b;
let resto;

const letras = [`a`, `b`, `c`, `d`, `e`, `f`];
[a,b, ...resto] = letras;

podemos tambêm pular valores usando espaços vazios
let a;
let b;
let resto;

const letras = [`a`, `b`, `c`, `d`, `e`, `f`];
[a, ,b, ...resto] = letras; // nesse caso pulamos a letra b
*/
/*
aula 22

const pessoa = {
    nome:`Vinicius`,
    sobrenome:`Garcia`,
    idade: 23,
    endereco:{
        rua:`rua pedro jose samora`,
        numero: 1092
    }
};

//atribuição via desestruturação para objeto
const { nome, idade } = pessoa;
//para criar com outro nome se faz assim
//const {nome: teste, idade} = pessoa;
console.log(nome, idade);

const pessoa = {
    nome:`Vinicius`,
    sobrenome:`Garcia`,
    idade: 23,
    endereco:{
        rua:`rua pedro jose samora`,
        numero: 1092
    }
};

const{endereco: {rua, numero}} = pessoa; // é assim que se pega valor
//dentro de uma variavel multivalorado
console.log(rua, numero);
*/

/*
aula 24
 loop
 for(let i = 0; i < 10; i++){
    console.log(`Linha `+ (i+1));
}
// o mais usados são o tamanho de listas como valor máximo para poder 
// usar de loop 
const frutas = [`maça`, `pera`, `uva`];
for(let i = 0; i < frutas.length;i++){
    console.log(`indice ${i}`, frutas[i]);
}

*/

/*
aula 25

outra forma de usar o for 
for in

const frutas = [`pera`, `maça`, `uva`, `melão`, `melancia`];

for (let i in frutas){
    console.log(frutas[i]);
}
*/

/*
aula 26
difernete do for in que pega o index, o for of pega o valor

const nome = `vinicius resende garcia`;

for(let valor of nome){
    console.log(valor);
}

// pegar valor e indice ao mesmo tempo
const nomes = [`vinicius`, `resende`, `garcia`];

nomes.forEach(function(elemento, indice){
    console.log(elemento, indice);
});
*/

/*
aula 27
não sabemos quantas vezes vai ser repitido então usa while

let i = 0;

while(i <= 10){
    console.log(i);
    i++;
}

// podemos usar outra forma de finalizar o laço não somente com base em 
uma quantidade de vezes

let i = 0;

while(i <= 10){
    console.log(i);
    i++;
}

// no do while primeiro executa depois verifica, diverente do while normal
// que primeiro confere pra depois executar

const True = true;

do{
    console.log(`esse valor é verdadeiro`)
}while(True === false);
*/

/*
aula 28

break e continue, break sai do laço completamente e o continue pula 
essa iteração do laço

const numeros= [1,2,3,4,5,6,7,8,9];
for (let numero of numeros){
    if(numero === 2){
        continue;
    }else if(numero === 7){
        break;
    }else{
        console.log(numero);
    }
}

console.log(`finalizado`);
*/

/*
execício 6

function Maior(numero1, numero2){
    if(numero1 === NaN || numero2 === NaN){
        console.log(`uma das variaveis não é um número`);
    }else if(numero1 > numero2){
        console.log(`o ` + numero1 + ` é maior`);
    }else{
        console.log(`o ` + numero2 + ` é maior`);
    }
}

Maior(3,3);
*/

/*
aula 29

try - tente isso
catch - caso não de certo o try


try{
    console.log(nãodeucerto);
}catch(err){
    console.log(`não existe`);
}

throw - caso seja iniciado paralisa a função e retorna o erro

function Maior(numero1, numero2){
    if(numero1 !== `number` || numero2 !== `number`){
        throw new error(`x e y precisam ser números`);
    }else if(numero1 > numero2){
        console.log(`o ` + numero1 + ` é maior`);
    }else{
        console.log(`o ` + numero2 + ` é maior`);
    }
}

try{
    console.log(Maior(1,2));
    console.log(Maior(`1`,2));
}catch(error){
    console.log(`houve um erro`);
}
*/

/*
aula 30

finally - algo que independente do acontecer, de erro ou qualquer coisa
ele será executado

function Maior(numero1, numero2){
    if(numero1 !== `number` || numero2 !== `number`){
        throw new error(`x e y precisam ser números`);
    }else if(numero1 > numero2){
        console.log(`o ` + numero1 + ` é maior`);
    }else{
        console.log(`o ` + numero2 + ` é maior`);
    }
}

try{
    console.log(Maior(1,2));
    console.log(Maior('1',2));
}catch(error){
    console.log(`houve um erro`);
}finally{
    console.log(`sempre executado`);
}

Maior(`1`, 2);

function mostraHora(data){
    if(!(data instanceof Date)){
        throw new err(`não é data`);
    }else{
        return data.toLocaleDateString(`pt-BR`, {
            hour: `2-digit`,
            minute: `2-digit`,
            second: `2-digit`,
            hour12: false
        });
    }   
}

try{
    const data = new Date(`11-01-2001 10:11:30`);
}catch(e){
    console.log(`deu erro`);
}finally{
    console.log(`tenha um bom dia`);
}
*/

/*
aula 31

setInterval - indica uma repetição da função em um intervalo fixo

setTimeout - indica um intervalo para a finalçização da função que
está dentro de seu escopo

function mostraHora(){
    let data = new Date();
    
    return data.toLocaleDateString(`pt-BR`, {
        hour12: false
    });

}

function funcaoIntervalo(){
    console.log(mostraHora());
}

const timer = setInterval(function() {
    console.log(mostraHora());
}, 1000);

setTimeout(function() {
    clearInterval(timer);
}, 5000)


*/
