import ValidaCPF from './index.js';


export default class geraCPF{
    rand(min = 100000000 , max = 999999999){
        return String(Math.floor(math.random() * (max - min) + min));
    }
    geraNovoCpf(){
        const cpfSemDigitos = this.rand();
        const digito1 = ValidaCPF.geraDigito(cpfSemDigitos);
        const digito2 = ValidaCPF.geraDigito(cpfSemDigitos + digito1);
        const novoCPF = cpfSemDigitos + digito1 + digito2;
        return novoCPF;
    }
}