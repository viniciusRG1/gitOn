import geraSenha from './index';

const senhaGerada = document.querySelector('.senhaGerada');
const qtdCaracteres = document.querySelector('.qtdCaracteres');
const chkMaiuscula = document.querySelector('.cnkMaiuscula');
const chkMinuscula = document.querySelector('.cnkMinuscula');
const chkNumero = document.querySelector('.cnkNumero');
const chkSimbolo = document.querySelector('.cnkSimbolo');

export default () => {
    gerarSenha.addEventListener('click', () => {
        senhaGerada.innerHTML = gera();
    });
};

function gera(){
    const senha = geraSenha(qtdCaracteres.value, chkMaiuscula.checked, chkMinuscula.checked, chkNumero.checked, chkSimbolo.checked);
    return senha;
}