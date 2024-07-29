/***
Escreva uma função que receba dois arrays e retorne um novo array contendo os
elementos comuns aos dois arrays, sem duplicatas.
 */

class questao12{

    constructor(){
        this.lista1 = new Array(1,2,3,4,5)
        this.lista2 = new Array(1,7,3,5,6)
        this.repeticoes = 0
    }

    verificar(){
        for(var i = 0; i < this.lista1.length; i++){

            for(var j = 0; j < this.lista2.length; j++){
                
                if(this.lista1[i] === this.lista2[j]){
                    this.repeticoes = this.repeticoes +1
                    return true
                } else {
                    return false
                }

            } 
        }
        console.log(this.repeticoes)
    }

}

let questao = new questao12()
questao.verificar()


