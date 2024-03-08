//Escreva um algoritmo que inverta os elementos de um array sem utilizar um array auxiliar

//Localiza

lista = [1, 2, 3, 4, 5, 6]

function inverterVetor(){
    if(vetor.length <= 1) return vetor;
    let comprimento = vetor.length;

    const vetorAuxiliar = []
    for(let i=0; i <comprimento; i++){
        vetorAuxiliar.push(vetor.pop());
    }
}
function inverterVetorSemAuxiliar(vetor){
    let inicio = 0;
    let fim =vetor.length - 1;
    while(inicio < fim){
        let temp = vetor[fim];
        vetor[fim] = vetor[inicio];
        vetor[inicio] = temp;
        incio++
        fim--
    }
    return vetor
}