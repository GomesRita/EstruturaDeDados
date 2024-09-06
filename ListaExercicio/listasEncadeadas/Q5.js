/**
 * 5. Adicione um método findNthFromEnd(n) na classe Lista Encadeada que retorne o valor
 * do n-ésimo elemento a partir do final da lista.
 * 
 * PROCESSO PARA REALIZAR ESTA FUNÇÃO
 *  >   Acessar a lista de trás para frente
 *  >   Considere o último elemento como o primeiro da busca
 *  >   Criar uma busca pelo elemento n procurado pelo usuário
 */

class No{
    constructor(valor){
        this.valor = valor;
        this.proximo = null;
    }
}

class ListaEncadeada{
    constructor(){
        this.cabeca = null
        this.tamanho = 0
    }

    inserirNoInicio(valor){
        let no = new No(valor)
        no.proximo = this.cabeca
        this.cabeca = no

        this.tamanho++;
        this.exibirElementos();
    }
    inserirNoFinal(valor){
        let no = new No(valor)
        if(this.cabeca == null){
            this.cabeca = no
        } 
        else{
            let atual = this.cabeca
            while(atual.proximo !== null){
                atual = atual.proximo
            }
            atual.proximo = no
        }
        this.tamanho++;
        this.exibirElementos();

    }

    inserirElementos(valor, posicao){
        let no = new No(valor)
        if(posicao > 0 && posicao <= this.tamanho){
            if(this.cabeca  ===  null || posicao == 1){
                this.inserirNoInicio(valor)
            } 
            if(posicao == this.tamanho){
                this.inserirNoFinal()
            }
            else {
                let atual = this.cabeca
                for(let i = 1; i < posicao; i++){
                    atual = atual.proximo
                } 
                no.proximo = atual.proximo;
                atual.proximo = no
                this.exibirElementos();
            }
        } else {
            console.log('Informe uma posição válida')
            return false
        }
    }

    removerInicio(){
        if(this.cabeca === null){
            return false
        } else {
            this.cabeca = this.cabeca.proximo
            this.tamanho--;
            console.log("LISTA ATUALIZADA APÓS REMOÇÃO DO NÓ")
            this.exibirElementos()
        }
    }

    buscarElementos(busca){
        let atual = this.cabeca
        while(atual !== null){
            if(atual.valor === busca){
                console.log(` \n Nodo encontrado \n` + atual.valor )
                return true
            }
            atual = atual.proximo
        }
        console.log('Nodo não encontrado')
        return false
    }
    
    exibirElementos(){
        let atual = this.cabeca
        console.log("Nodos")
        while (atual !== null){
            console.log(atual.valor)
            atual = atual.proximo
        }
    }

    excluirPorValor(num){
        if (!this.cabeca) return;

        // Caso especial: a cabeça é o nó a ser removido
        if (this.cabeca.valor === num) {
            this.cabeca = this.cabeca.proximo;
            return;
        }

        let atual = this.cabeca;
        while (atual.proximo.valor !== null && atual.proximo.valor !== num) {
            atual = atual.proximo;
        }

        // Se encontramos o valor
        if (atual.proximo !== null) {
            atual.proximo = atual.proximo.proximo;
        }
    }

    findNthFromEnd(n){
        if(! n > this.tamanho){
            let atual = this.cabeca
            for(let i = 1; i <= this.tamanho; i++){
                if((this.tamanho - n) === i){
                    console.log(`Este é o ${n}-ésimo valor da lista encadeada: ${atual.proximo}`)
                } else {
                    atual = this.cabeca.proximo
                }
            }
        } else{
            console.log(`${n} é um valor maior que o tamanho da lista`)
            return false;
        }
    }

    retornaUltimoValor() {
        if (!this.cabeca) {
            return null; // Lista está vazia
        }
        let current = this.cabeca;
        while (current.proximo !== null) {
            current = current.proximo;
        }
        return current.valor;
    }
    
    removeDuplicates(){
        let atual = this.cabeca
        var lista = []

        for(let i = 1; i <= this.tamanho; i++){
            lista.push(atual.valor)
            atual = atual.proximo
        }
        
    }

}

const linkedlist = new ListaEncadeada()

linkedlist.inserirNoInicio(1);
linkedlist.inserirNoInicio('b');
linkedlist.inserirNoInicio(2);
linkedlist.inserirNoInicio(2);
linkedlist.inserirNoInicio(2);
console.log('--------------------------------------------')
linkedlist.findNthFromEnd(1)
console.log('--------------------------------------------')
console.log("Remover Duplicatas")
linkedlist.removeDuplicates(2)
console.log('--------------------------------------------')
console.log("Remover Elementos")
linkedlist.excluirPorValor(2)
linkedlist.exibirElementos()