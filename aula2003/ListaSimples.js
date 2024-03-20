class No {
    constructor(dado){
        this.dado = dado;
        this.proximo = null;
    }
}

class ListaSimples {
    constructor() {
        this.inicio = null;
    }

    adicionar(dado) {
        let novoNo = new No(dado);

        //situação de uma lista vazia
        if (!this.inicio){
            this.inicio = novoNo;
            return;
        }

        let atual = this.inicio.proximo;
        while (atual!= null){
            atual = atual.proximo;
            
        }
        atual = novoNo;

    }
}

const lista = new ListaSimples();