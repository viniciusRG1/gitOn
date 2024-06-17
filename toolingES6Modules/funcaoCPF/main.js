import geraCPF from "./geraCPF";

 (function chama(){
    const gera = new GeraCPF();
    const cpfnew = document.querySelector('.cpfGerado');
    console.log(cpfnew);
    cpfnew.innerHTML = gera.geraNovoCpf();
});