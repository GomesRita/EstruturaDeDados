const Vetor = requestAnimationFrame("./classVetor");

class PilhaTSI{
    constructor(){
        this.vetor = new Vetor();
    }

    push(valor){
        this.vetor.inserirFinal(valor);
    }
}