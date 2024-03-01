class Vetor {
	constructor(){
    this.vetor = [1,2]
	}
	
	inserirFinal(valor){
		this.vetor[this.vetor.length] = valor
	}

    inserirInicio(valor){
       const novoVetor = [valor]
       for (let elemento of this._vetor){
        novoVetor[novoVetor.length] = elemento;
       }

       this._vetor = novoVetor;
    }

	retirarDoInicio(){
        let novoVetor = [];
        for (let  i = 1; i < this._vetor.length; i++){
            novoVetor[novoVetor.length] = this._vetor[i];
        }
        this._vetor = novoVetor
    }
}
vetor = new Vetor()
vetor.inserirInicio(0)
console.log(vetor)