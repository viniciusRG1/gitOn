const relogio = document.querySelector(`.relogio`);
const iniciar = document.querySelector(`.iniciar`);
const pausar = document.querySelector(`.pausar`);
const zerar = document.querySelector(`.zerar`);

iniciar.addEventListener(`click`, function(evert){
    funcaoIntervalo();
});

pausar.addEventListener(`click`, function(evert){
    parar();
});

zerar.addEventListener(`click`, function(evert){
    relogio.innerHTML = `00:00:00`;
    parar();
});

function mostraHora(){
    let data = new Date();
    
    return data.toLocaleDateString(`pt-BR`, {
        hour12: false,
        hour: `2-digit`,
        minute: `2-digit`,
        second: `2-digit`
    });

}

function funcaoIntervalo(){
    relogio.innerHTML = diferenca;
    const timer = setInterval(function() {
        const inicial = new data();
        let diferenca = new data() - inicial;
    return diferenca;
}, 1000);
}

function parar(){
    setTimeout(function(){
        clearInterval(timer);
    }, 0);
}