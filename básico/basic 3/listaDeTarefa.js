const inputNovaTarefa = document.querySelector(`.inputNovaTarefa`);
const btnAddTarefa = document.querySelector(`.btnAddTarefa`);
const tarefa = document.querySelector(`.tarefa`);

function criaTerefa(textoInput){
    const li = document.createElement(`li`);
    li.innerText = textoInput;
    tarefa.appendChild(li);   
    limpaInput();
    criaBotaoApagar(li);
    salvarTarefas();
};

function criaBotaoApagar(li){
    const botoaApagar = document.createElement(`button`);
    botoaApagar.innerText = `Apagar`;
    li.appendChild(botoaApagar);
    botoaApagar.setAttribute(`class`, `apagar`);
}

inputNovaTarefa.addEventListener(`keypress`, function(e){
    if(e.KeyCode === 13){
        if(!inputNovaTarefa.vaule) return;
        criaTerefa(inputNovaTarefa);
    }
});

function limpaInput(){
    inputNovaTarefa.value = ``;
    inputNovaTarefa.focus();
}

btnAddTarefa.addEventListener(`click`, function(e){
    if(!inputNovaTarefa.vaule) return;
    criaTerefa(inputNovaTarefa.value);
});

document.addEventListener(`click`, function(e){
    const el = e.target;
    if(el.classList.contains(`apagar`)){
        el.parentElement.remove();
        salvarTarefas();
    }
});

function salvarTarefas(){
    const liTarefas = tarefa.querySelectorAll();
    const listaDeTarefas = [];

    for(let tarefa of liTarefas){
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace(`Apagar`, ` `).trim();
        listaDeTarefas.push(tarefaTexto);
    }

    const tarefasJSON = JSON.stringify(listaDeTarefas);
    localStorage.setItem(`tarefa`, tarefasJSON);
}