/**
11. Implemente uma classe ListaDuplamenteEncadeada para representar uma lista
encadeada duplamente ligada. A classe deve incluir métodos para adicionar e
remover elementos tanto do início quanto do final da lista, buscar elementos por
valor, exibir todos os elementos da lista em ambas as direções (da cabeça para a
cauda e vice-versa). Simule a adição, remoção e busca de vários elementos,
exibindo o estado da lista a cada operação.
 */

class No{
    constructor(valor){
        this.valor = valor
        this.proximo = null
        this.anterior = null
    }

}

class ListaDuplamenteEncadeada{

    constructor(){
        this.inicio = null;
        this.final =  null;
        this.tamanho = 0;
    }

    adicionarInicio(valor){
        let no = new No(valor)

        if(this.tamanho === 0){
            this.inicio = no
            this.final = no
        } 
        else {
            no.proximo = this.inicio;
            this.inicio.anterior = no;
            this.inicio = no;

        }
        this.tamanho = this.tamanho+1
        //this.exibirTodosFinal();

    }

    removerInicio(){
        if(this.inicio !== null){
            this.inicio = this.inicio.proximo;
            this.inicio.anterior = null;
            this.tamanho = this.tamanho - 1
        }
        else{
            console.log("A lista está vazia")
        }
    } 

    adicionarFinal(valor){
        let no = new No(valor)

        if(this.tamanho === 0){
            this.inicio = no
            this.final = no
        } else {
            no.anterior = this.final;
            this.final.proximo = no;
            this.final = no;
        }

    }
    
    removerFinal(){

    }

    buscarElementos(valor){
        let atual = this.inicio
        while(atual !== null){
            if(atual.valor === valor){
            console.log("\nNó encontrado: " + atual.valor )
                return true
            }
            atual = atual.proximo
        }
        console.log('Nó não encontrado')
        return false
    }
     
    exibirTodosInicio(){
        let no = this.inicio;
        
        console.log("\nLISTA ATUALIZADA INICIO-FINAL")
        while (no !== null) {
        const anteriorValor = no.anterior ? no.anterior.valor : 'null';
        const proximoValor = no.proximo ? no.proximo.valor : 'null';

        console.log(`Anterior: ${anteriorValor} | Valor: ${no.valor} | Próximo: ${proximoValor}`);
        no = no.proximo;
    }
    }
    exibirTodosFinal(){
        let no = this.final;
        
        console.log("\nLISTA ATUALIZADA FINAL-INICIO")
        while (no !== null) {
        const anteriorValor = no.anterior ? no.anterior.valor : 'null';
        const proximoValor = no.proximo ? no.proximo.valor : 'null';

        console.log(`Próximo: ${proximoValor} | Valor: ${no.valor} | Anterior: ${anteriorValor}`);
        no = no.anterior;
    }
    }
}

let list = new ListaDuplamenteEncadeada()
list.adicionarInicio(1)
list.exibirTodosInicio()
list.adicionarInicio(2)
//list.exibirTodosInicio()
//list.removerInicio()
//list.exibirTodosInicio()
list.buscarElementos(1)
list.adicionarFinal(3)
list.exibirTodosInicio()
