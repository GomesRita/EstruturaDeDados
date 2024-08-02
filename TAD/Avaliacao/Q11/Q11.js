class No {
    constructor(valor) {
        this.valor = valor;
        this.proximo = null;
        this.anterior = null;
    }
}

class ListaDuplamenteEncadeada {
    constructor() {
        this.inicio = null;
        this.final = null;
        this.tamanho = 0;
    }

    adicionarInicio(valor) {
        let no = new No(valor);

        if (this.tamanho === 0) {
            this.inicio = no;
            this.final = no;
        } else {
            no.proximo = this.inicio;
            this.inicio.anterior = no;
            this.inicio = no;
        }
        this.tamanho++;
    }

    removerInicio() {
        if (this.inicio !== null) {
            if (this.inicio === this.final) {
                // Lista tem apenas um elemento
                this.inicio = null;
                this.final = null;
            } else {
                this.inicio = this.inicio.proximo;
                this.inicio.anterior = null;
            }
            this.tamanho--;
        } else {
            console.log("A lista está vazia");
        }
    }

    adicionarFinal(valor) {
        let no = new No(valor);

        if (this.tamanho === 0) {
            this.inicio = no;
            this.final = no;
        } else {
            no.anterior = this.final;
            this.final.proximo = no;
            this.final = no;
        }
        this.tamanho++;
    }

    removerFinal() {
        if (this.final !== null) {
            if (this.inicio === this.final) {
                // Lista tem apenas um elemento
                this.inicio = null;
                this.final = null;
            } else {
                this.final = this.final.anterior;
                this.final.proximo = null;
            }
            this.tamanho--;
        } else {
            console.log('A lista está vazia');
        }
    }

    buscarElementos(valor) {
        let atual = this.inicio;
        while (atual !== null) {
            if (atual.valor === valor) {
                console.log("\nNó encontrado: " + atual.valor);
                return true;
            }
            atual = atual.proximo;
        }
        console.log('Nó não encontrado');
        return false;
    }

    exibirTodosInicio() {
        let no = this.inicio;

        console.log("\nLISTA ATUALIZADA INICIO-FINAL");
        while (no !== null) {
            const anteriorValor = no.anterior ? no.anterior.valor : 'null';
            const proximoValor = no.proximo ? no.proximo.valor : 'null';

            console.log(`Anterior: ${anteriorValor} | Valor: ${no.valor} | Próximo: ${proximoValor}`);
            no = no.proximo;
        }
    }

    exibirTodosFinal() {
        let no = this.final;

        console.log("\nLISTA ATUALIZADA FINAL-INICIO");
        while (no !== null) {
            const anteriorValor = no.anterior ? no.anterior.valor : 'null';
            const proximoValor = no.proximo ? no.proximo.valor : 'null';

            console.log(`Próximo: ${proximoValor} | Valor: ${no.valor} | Anterior: ${anteriorValor}`);
            no = no.anterior;
        }
    }
}

module.exports = ListaDuplamenteEncadeada;
let list = new ListaDuplamenteEncadeada()
list.adicionarInicio(1)
list.exibirTodosInicio()
list.adicionarInicio(2)
//list.exibirTodosInicio()
//list.removerInicio()
//list.exibirTodosInicio()
list.buscarElementos(1)
list.adicionarFinal(3)
list.exibirTodosFinal()
list.removerFinal()
list.exibirTodosFinal()