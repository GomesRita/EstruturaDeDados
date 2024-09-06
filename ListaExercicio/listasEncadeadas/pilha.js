class Pilha{
    
    //Criar pilha vazia
    constructor(){
        this.pilha = []
        this.topo = this.base - 1 //ùltimo valor da pilha
        this.base = 1 //Base da pilha
        this.limite = 6 //Tamanho máximo da pilha
    }

    //Exibir Elementos da pilha
    exibirElementos(){
        if(this.pilha.length > 0){
            for(let i = this.pilha.length; i >= 0; i--){
                console.log(this.pilha[i] + '\n')
            }
        }
    }
    //Inserir um novo nodo
    inserirNovoNodo(no){
        //Verifica se a pilha tem espaço para inserir o novo nó
        if(this.pilha.length < this.limite){
            this.pilha.push(no)
            if(this.pilha.length == 1){
                this.topo = 0
            } else {
                this.topo = this.topo + 1
            }
        } else {
            console.log('A pilha está cheia')
            return false;
        }
    }

    //excluir o nodo do topo
    excluirNodo(){
        this.pilha.pop()
        if(this.pilha.length > 0){
            this.topo = this.topo - 1
        } else {
            this.topo = 0
        }
    }

    //consultar ou modificar nodo do topo
    acessarTopo(){
        if(this.pilha.length > 0){
            console.log('Topo: '+ this.pilha[this.topo])
        } else {
            console.log('A pilha está vazia')
        }
    }

    modificarTopo(valor){
        if(this.pilha.length > 0){
           this.pilha[this.topo] = valor
           console.log('Topo atualizado para ' + this.pilha[this.topo])
        } else {
            console.log('A pilha está vazia')
        }
    }

    //destruir pilha
}

let pilha = new Pilha()
pilha.inserirNovoNodo(1)
pilha.inserirNovoNodo(2)
pilha.exibirElementos()
console.log('-------------------------')
pilha.excluirNodo()
pilha.exibirElementos()
console.log('-------------------------')
pilha.exibirElementos()
console.log('-------------------------')
pilha.acessarTopo()
console.log('-------------------------')
pilha.modificarTopo(5)