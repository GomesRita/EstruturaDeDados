/**
10. Implemente uma classe ListaEncadeada para representar uma lista encadeada
simples. A classe deve incluir métodos para adicionar elementos ao final da lista,
remover elementos do início da lista, buscar elementos por valor e exibir todos os
elementos da lista. Além disso, implemente métodos para inserir elementos em
posições específicas e remover elementos por valor. Simule a adição, remoção e
busca de vários elementos, exibindo o estado da lista a cada operação.
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

    excluirPorValor(valor){
        let atual = this.cabeca

        while(atual.proximo.valor !== valor){
            atual = atual.proximo
        } 
        if(atual.proximo.valor === valor){
            atual.proximo = atual.proximo.proximo
            this.tamanho--;
            console.log('Atual: ' + atual.valor + '\n' + 'Proximo: ' + atual.proximo.valor)
            this.exibirElementos();
        } else{
            console.log(`Valor ${valor} não encontrado`)
        }
    }
}

const linkedlist = new ListaEncadeada()

linkedlist.inserirNoInicio(1);
linkedlist.inserirNoInicio('b');
linkedlist.inserirNoInicio(2);
linkedlist.inserirNoInicio(3);
linkedlist.exibirElementos();
linkedlist.inserirElementos(5, 2)
linkedlist.inserirNoFinal("a")
linkedlist.excluirPorValor(5);
