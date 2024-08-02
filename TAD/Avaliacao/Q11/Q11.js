/**
 * @class Classe objeto que representa o Nó, contendo o valor, o endereço do próximo objeto e do objeto anterior.
 */
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
        /**
         * @description 
         * if (this.tamanho === 0) - verifica se a lista está vazia
         * no.proximo - indica que o atual primeiro nó agora será o próximo após inserir o novo nó
         * this.inicio.anterior - recebe o novo nó como o ANTERIOR ao atual primeiro nó
         * 
         * @param {this.tamanho++} this.tamanho - aumenta a lista em +1
         */
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
    /**
     * @description 
     * if (this.inicio === this.final) - se a lista tiver apenas 1 elemento atualiza inicio e final para null
     * this.inicio = this.inicio.proximo; - indica que inicio agora receberá o PROXIMO objeto da lista
     * this.inicio.anterior = null; - apaga o 'endereço' do objeto anterior do primeiro nó da fila 
     * 
     * @param {this.tamanho--} this.tamanho - descresce 1 o tamanho da lista 
     */
    removerInicio() {
        if (this.inicio !== null) {
            if (this.inicio === this.final) {
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

    /**
     * @description 
     * se a lista estiver vazia o novo nó será o inicio e o final
     * se não, o novo nó recebe o atual this.final como anterior.
     *  > o atual this.final recebe o nó como próximo
     *  > o novo nó é adicionado ao final
     */

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

    /**
     * @description
     * se a lista só possuir um elemento this.inicio e this.final deve
     * receber null indicando que a lista está vazia;
     * se não this.final recebe o valor do objeto anterior
     * a ele e atualiza o valor PROXIMO para null;
     *  @param {this.tamanho--} this.tamanho - descresce 1 o tamanho da lista
     */
    removerFinal() {
        if (this.final !== null) {
            if (this.inicio === this.final) {
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
    /**
     * @description
     * recebe o valor de um nó e busca ele percorrendo a lista do começo ao final;
     * @param {let atual} atual - recebe o primeiro objeto da lista
     * @param {valor} valor - objeto procurado na lista
     */
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
    /**
     * @description 
     * percorre a lista retornando do primeiro ao último elemento
     * @param {const anteriorValor} anteriorValor -  verifica se o valor contido no nó é válido para ser retornado
     * se não atribui null, evitando erros.
     * @param {const proximoValor} proximoValor - verifica se o valor contido no nó é válido para ser retornado
     * se não atribui null, evitando erros.
     */
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
    /**
     * @description
     * lista os elementos do último ao primeiro
     */
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
//adiciona o novo elemento
list.adicionarInicio(1)
//mostra se o novo elemento  foi adicionado
list.exibirTodosInicio()
list.adicionarInicio(2)
list.exibirTodosInicio()
//apaga o elemento com valor 2 - primeiro da lista
list.removerInicio()
//mostra que o elemento 2 foi apagado
list.exibirTodosInicio()
//pesquisa pelo elemento 1
list.buscarElementos(1)
//adiciona elemento ao final
list.adicionarFinal(3)
//mostra se o elemento foi adicionado ao final
list.exibirTodosFinal()
//remove o elemento com valor 3
list.removerFinal()
//deve constar na lista apenas o elemento com valor 1.
list.exibirTodosFinal()