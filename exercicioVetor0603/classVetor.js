//Criado por JoaoNascimentoIFRN em https://github.com/JoaoNascimentoIFRN/ED20241.git

class Vetor {
    constructor() {
        this._vetor = [];
    }

    inserirFinal(valor) {
        this._vetor[this._vetor.length] = valor;
    }

    inserirInicio(valor) {
        //this._vetor.unshift(valor);
        let novoVetor = [];
        novoVetor[novoVetor.length] = valor;
        //for (let elemento of this._vetor){
        for (let i = 0; i < this._vetor.length; i++) {
            novoVetor[novoVetor.length] = this._vetor[i];
        }
        this._vetor = novoVetor;

    }

    retirarInicio(){
        //this._vetor.shift();
        let novoVetor = [];
        for (let i = 1; i < this._vetor.length; i++) {
            novoVetor[novoVetor.length] = this._vetor[i];
        }
        this._vetor = novoVetor;
    }

    retirarFinal(){
        //this._vetor.pop();
        let novoVetor = [];
        for (let i = 0; i < this._vetor.length-1; i++) {
            novoVetor[novoVetor.length] = this._vetor[i];
        }
        this._vetor = novoVetor;
    }

    get vetor() {
        return this._vetor;
    }


    //inserirFinal, inserirInicio, retirarInicio e retirarFinal
}

const v = new Vetor();
v.inserirFinal(15);
v.inserirFinal(1);
v.inserirInicio(2);
console.log(v.vetor);
v.retirarInicio();
console.log(v.vetor);
v.retirarFinal();
console.log(v.vetor);


const v2 = [-2,0,12,45];