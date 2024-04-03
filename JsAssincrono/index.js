/*
aula 1

promise

function esperaAi(msg, time){
    
    return new Promise((resolve, reject) => {
        if(typeof msg !== `string`) reject(`valor de tipo errado`);
        setTimeout(() => {
            resolve(msg);
        }, time);
    });
}
// thenn pra pegar o acerto e catch para erro

esperaAi(`olá`, 1000).then(resposta => {
    console.log(resposta);
    return esperaAi(`ola de novo`);
}).then(resposta => {
    return resposta;
}).catch(e => {
    console.log(e);
});
*/

/*
aula 2

método promise

function esperaAi(msg, time){
    
    return new Promise((resolve, reject) => {
        if(typeof msg !== `string`){ 
            reject(`Cai na arapuca`);
            return;
    }
        setTimeout(() => {
            resolve(msg.toUpperCase());
        }, time);
    });
}
// thenn pra pegar o acerto e catch para erro

esperaAi(`olá`, 1000).then(resposta => {
    console.log(resposta);
    return esperaAi(`ola de novo`);
}).then(resposta => {
    return resposta;
}).catch(e => {
    console.log(e);
});

const promises = [
    esperaAi(`promise 1`, 3000),
    esperaAi(`promise 2`, 5000),
    esperaAi(`promise 3`, 1000),
];
// junta todas as primises
Promise.all(promises).then(function(valor){
    console.log(valor);
}).catch(function(erro){
    console.log(erro);
});

Promise.race(promises).then(function(valor){ // entrega o primeiro q for 
    // entregue
    console.log(valor);
}).catch(function(erro){
    console.log(erro);
})

// podemos jogar automáricamente um valor como false ou true simplemente
// dando como reject ou resolve 
// return Promise.resolve(`página em cache`) or 
// return Promise.reject(`página em cache`)
*/

/*
aula 3

Async e await

await == faz esperar até q a promise seja resolvida

async 
*/

/*
    function esperaAi(msg, time){
    
    return new Promise((resolve, reject) => {
        if(typeof msg !== `string`) reject(`valor de tipo errado`);
        setTimeout(() => {
            resolve(msg);
        }, time);
    });
}
// thenn pra pegar o acerto e catch para erro

esperaAi(`fase 1`, 1000).then(valor => {
    console.log(valor);
    return esperaAi(`fase 2`, 3000)
}).then(fase => {
    console.log(fase);
    return esperaAi(`fase`, 5000);
}).catch(e => console.lop(e));


async function executa(){
    try{
        const fase1 = await esperaAi(`fase 1`, 1000);
        console.log(fase1);
        const fase2 = await esperaAi(`fase 2`, 1000);
        console.log(fase2);
        const fase3 = await esperaAi(`fase 3`, 1000);
        console.log(fase3);
    }catch (e){
        console.log(e);
    }
}

executa();
*/

/*
aula 4

const request = obj => {
    const xhr = new XMLHttpRequest();
    xhr.open(obj.method, obj.url, true);
    xhr.send();

    xhr.addEventListener('load', () => {
        if(xhr.status >= 200 && xhr.status < 300){
            obj.success(xhr.responseText);
        }else{
            obj.error({code: xhr.status})
        }
    });
};

document.addEventListener('click', e=> {
    const el = e.target;
    const tag = el.tagName.toLowerCase();

    if(tag === 'a'){
        e.preventDefault();
        carregaPagina(el);
    }
});

function carregaPagina(el){
    const href = el.getAttribute('href');

    request({
        method: 'GET',
        url: href,success(reponse){
                carregaResultado(response);
        },
        error(errorText){

        }
    })};
function carregaResultado(response){
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = resultado;
};
*/
/*
aula 5 
fetch API 

const request = obj => {
    const xhr = new XMLHttpRequest();
    xhr.open(obj.method, obj.url, true);
    xhr.send();

    xhr.addEventListener('load', () => {
        if(xhr.status >= 200 && xhr.status < 300){
            obj.success(xhr.responseText);
        }else{
            obj.error({code: xhr.status})
        }
    });
};

document.addEventListener('click', e=> {
    const el = e.target;
    const tag = el.tagName.toLowerCase();

    if(tag === 'a'){
        e.preventDefault();
        carregaPagina(el);
    }
});

// é a mesma coisa de XMLHttpRequest porém é bem mais curto

function carregaPagina(el){
    try{
        const href = el.getAttribute('href');
    fetch(href).then(response => {
        if(response.status !== 200) throw new Error(`error`);
        return response.text();
    })
    .then(html => carregaResultado(html))
    }
    catch(e){
        console.log(e);
    }
};
function carregaResultado(response){
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = resultado;
};

fetch(`p1.html`).then(resposta => {
    if(resposta.status  !== 200){
        throw new Error('error');
    }
    return resposta.text();
}).then(html => console.log(html)) // precisa desse segundo then
//pois o primeiro não retorna em text, então se faz outro then para
//transformar em texto
.catch(e => console.log(e));
*/

/*
aula 6
outra forma fetch

fetch('pessoas.json').then(resposta => resposta.json())
    .then(json => carregaElementosPagina(json));

function carregaElementosPagina (json){
    for(let pessoa of json){
        const tr = document.createElement(`tr`);

        let td = doccumento.createElement(`td`);
        td.innerHTML = pessoa.nome;
        tr.appendChild(td);
        
        td = document.createElement(`td`);
        td.innerHTML = pessoa.idade;
        tr.appendChild(td);

        td = document.createElement(`td`);
        td.innerHTML = pessoa.salario;
        tr.appendChild(td);

        table.appendChild(tr);
    }

    const resultado = document.querySelector(`.resultado`);
    resultado.appendChild(table);
}

*/



