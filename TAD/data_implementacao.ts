class Data{
    dia: any;
    mes: any;
    ano: any;
    mes30dias: Array<number>
    mes31dias: Array<number>

    constructor(date: Date){
        this.dia = date.getDate()
        this.mes = date.getMonth()
        this.ano = date.getFullYear()
        this.mes30dias = [4,6,9,11]
        this.mes31dias = [1,3,5,7,8,10,12]
    }
    /*  -> A função recebe o objeto dataAtual
        -> A função se o mês informado está contido no array 30 ou 31 dias
        -> A função verifica se o número de dias informado corresponde ao tipo de mês
    */
    recebeData_Data(data: Data){
       if(this.mes30dias.includes(data.mes)){
            if(data.dia >= 1 && data.dia <= 30){
                console.log('A data é válida')
                return true
            } else {
                console.log('Esta data é inválida')
            }
       } if(this.mes31dias.includes(data.mes)){
            if(data.dia >= 1 && data.dia <= 31){
                console.log('A data é válida')
                return true
            } else {
                console.log('Esta data é inválida')
            }
       }
    }
    /*  -> A função passa o valor de this.ano para inteiro
        -> A função verifica se o valor é divisível por 4, não é divisível por 100 ou é divisível por 400
    */
    calcula_ano_bissexto(){
        let ano = parseInt(this.ano)
        if(ano % 4 === 0 && ano %100 !== 0 || (ano%400 === 0)){
            console.log("este é um ano bissexto")
        } else{
            console.log('este não é um ano bissexto')
        }
    }

    recebeData_String(data: String){
       let dataAtual = data.split('/')
       this.dia = parseInt(dataAtual[0])
       this.mes = parseInt(dataAtual[1])
       this.ano = parseInt(dataAtual[2])

       let novaData = new Date(this.ano, this.mes - 1, this.dia)
       console.log(novaData)
       console.log(dataAtual)

    }

    somaData(numero: number){
        let somador = numero 
        console.log(somador)

    }
    
}

let dataAtual = new Data(new Date(2024,4,30))
dataAtual.recebeData_Data(dataAtual) // Data inválida
dataAtual.calcula_ano_bissexto()
dataAtual.recebeData_String('22/06/2024')