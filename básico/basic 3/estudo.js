/*const form = document.querySelector(`#formulario`);

form.addEventListener(`submit`, function (e){
    e.preventDefault();
    console.log(`Evento previnido.`);
    const valorPeso = e.target.querySelector(`#peso`);
    const valorAltura = e.target.querySelector(`#altura`);
    if(!valorPeso || !valorAltura){
        setResultado(`peso invalido`);
        return;
    }else{
        const valorPesoTrue = Number(valorPeso.value);
        const valorAlturaTrue = Number(valorAltura.value);
        const valorParaIMC = (valorPesoTrue / valorAlturaTrue);
        console.log(valorParaIMC);
        setResultado(calculaIMC(valorParaIMC));
    }
});

function setResultado (msg){
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';

    const p = document.createElement('p');
    p.innerHTML = msg;
    resultado.appendChild(p);
}

function calculaIMC(resultado){
    const resposta = determinarTipo(resultado);
    return resposta;
}

function determinarTipo(IMC){
    console.log(IMC);
    if(IMC < 18.5){
        return(`IMC de `, IMC, `, você está abaixo do peso`);
    }else if(IMC < 25){
        return(`IMC de `, IMC, `, você está normal`);
    }else if(IMC < 30){
        return(`IMC de `, IMC, `, você está com obesidade grau 1`);
    }else if(IMC < 35){
        return(`IMC de `, IMC, `, você está com obesidade grau 2`);
    }else{
        return(`IMC de `, IMC, `, você está com obesidade grau 3`);
    }
} */

/*
const form = document.querySelector(`#formulario`);

form.addEventListener(`submit`, function (e){
    e.preventDefault();
    console.log(`Evento previnido.`);
    const data = new Date();
    const diaSemana = data.getDay();
    const mes = data.getMonth();
    console.log(diaSemana);
    console.log(mes);
    const dataFormatada = formatDate(diaSemana, mes, data);
    setResultado(dataFormatada);
    console.log(dataFormatada);
});

function setResultado (msg){
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';

    const p = document.createElement('p');
    p.innerHTML = msg;
    resultado.appendChild(p);
}

function formatDate(day, month, date){
    switch(day){
        case 0 :
           day = `Domingo`;
           break;
        case 1 :
            day = `Segunda`;
            break;
        case 2 :
            day = `Terça`;
            break;
        case 3 :
            day = `Quarta`;
            break;
        case 4 :
            day = `Quinta`;
            break;
        case 5 :
            day = `Sexta`;
            break;
        case 6 :
            day = `Sábado`;
            break;
        case undefined:
            day = ``;    
    }
    switch(month){
        case 0 :
           month = `Janeiro`;
           break;
        case 1 :
            month = `Ferereiro`;
            break;
        case 2 :
            month = `Março`;
            break;
        case 3 :
            month = `Abril`;
            break;
        case 4:
            month = `maio`;
            break
        case 5 :
            month = `Junho`;
            break;
        case 6 :
            month = `Julho`;
            break;
        case 7 :
            month = `Agosto`;
            break;
        case 8 :
            month = `Setembro`;
            break;
        case 9 :
            month = `Outubro`;
            break;
        case 10 :
            month = `Novembro`;
            break;
        case 11 :
            month = `Dezembro`;
            break;
        case undefined:
            month = ``;    
    }
    const dia =  date.getDate(); 
    const mes = month;
    const ano = date.getFullYear();
    const hora =  date.getHours();
    const minu = date.getMinutes(); 
    const frase = String(day +`,`+ dia + ` de `+  mes + ` de ` +  ano + ` ` + hora + ` ` + minu);  
    console.log(frase);
    return frase;
}
*/

//const valorPeso = e.target.querySelector(`#peso`);

/*const form = document.querySelector(`#formulario`);

form.addEventListener(`submit`, function (e){
    e.preventDefault();
    const frase = e.target.querySelector(`#fraseParaRepitir`);
    const contador = e.target.querySelector(`#vezesParaRepitir`);
    console.log(`Evento previnido.`);
    console.log(contador);
    for(let i = 0; i < contador.value; i++){
        let fraseN = frase.value + i;
        setResultado(fraseN);
        console.log(fraseN);
    }
    
});

function setResultado (msg){
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';
    const p = document.createElement('p');
    console.log(msg);
    p.innerHTML = msg;
    resultado.appendChild(p);
} */