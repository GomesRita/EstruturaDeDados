/***
Escreva uma função que receba dois arrays e retorne um novo array contendo os
elementos comuns aos dois arrays, sem duplicatas.
 */

class Questao12{

    constructor(){
        this.lista1 = [1,2,3,4,5]
        this.lista2 = [1,2,3,5,6]
        this.repeticoes = []
    }

    verificar(){

        for(var i = 0; i < this.lista1.length; i++){

            for(var j = 0; j < this.lista2.length; j++){
                if(this.lista1[i] === this.lista2[j]){
                    if(this.repeticoes.includes(this.lista1[i]) === false){
                        this.repeticoes.push(this.lista1[i])
                    }
                } 

            } 
        }
        console.log("ITENS EM COMUM NAS DUAS LISTAS \n" + this.repeticoes + "\nTotal de itens comuns: " + this.repeticoes.length)
        return this.repeticoes
    }

}
module.exports = Questao12;
let questao = new Questao12();
questao.verificar();


