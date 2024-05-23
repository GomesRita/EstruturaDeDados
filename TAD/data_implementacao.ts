class Data{
    dia: any;
    mes: any;
    ano: any;
    mes30dias: Array<number> =  [4,6,9,11]
    mes31dias: Array<number> =  [1,3,5,7,8,10,12]

    constructor(date: Date){
        this.dia = date.getDate()
        this.mes = date.getMonth()
        this.ano = date.getFullYear()
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
    /*
        ->  se o mês for de 30 dias, a contagem deve ser dada pela dirença entre
            a ((soma de dias do mês + acrécimo) - o número máximo do mês) e 
            aumentar o número de meses;
        ->  se o mês for de 31 dias, a contagem deve ser dada pela dirença entre
            a ((soma de dias do mês + acrécimo) - o número máximo do mês) e 
            aumentar o número de meses;
        ->  se a contagem de meses exceder 12 meses o ano deve ser alterado;
    */
    somaData(numero: number, data: Data){
        let somador = numero
        let diferenca = 0
        if(somador > 30){
            for(var i = somador; i > 30; i = i - 30 ){
                this.mes = this.mes + 1
                console.log('this.mes: ' + this.mes + ' data.mes: ' + data.mes)
                somador = somador - 30
            } 
            if(this.mes30dias.includes(data.mes)){
                let soma = somador + data.dia
                if(soma > 30){
                    this.mes = this.mes + 1
                    let somaFinal = soma - 30
                    this.dia = somaFinal
                    let DataNova = (this.ano, this.mes, this.mes, this.dia)
                    console.log('Resultado 1: ' + DataNova)
                } else {
                    this.dia = soma
                    let DataNova = (this.ano, this.mes, this.mes, this.dia)
                    console.log('Resultado 2: ' + DataNova)
                }
            } 
            else if(this.mes31dias.includes(data.mes)){
                let soma = somador + data.dia
                if(soma > 31){
                    this.mes = this.mes + 1
                    let somaFinal = soma - 31
                    this.dia = somaFinal
                    let DataNova = (this.ano, this.mes, this.mes, this.dia)
                    console.log('Resultado 3: ' + DataNova)
                } else {
                    this.dia = soma
                    let DataNova = (this.ano, this.mes, this.mes, this.dia)
                    console.log('Resultado 4: ' + DataNova)
                }
            }
        }
        else if(somador <= 30){
            if(this.mes30dias.includes(data.mes)){
                let soma = somador + data.dia
                if(soma > 30){
                    this.mes = this.mes + 1
                    let somaFinal = soma - 30
                    this.dia = somaFinal
                    let DataNova = (this.ano, this.mes, this.mes, this.dia)
                    console.log('Resultado 5: ' + DataNova)
                } else {
                    this.dia = soma
                    let DataNova = (this.ano, this.mes, this.mes, this.dia)
                    console.log('Resultado 6: ' + DataNova)
                }
            } 
            else if(this.mes31dias.includes(data.mes)){
                let soma = somador + data.dia
                if(soma > 31){
                    this.mes = this.mes + 1
                    let somaFinal = soma - 31
                    this.dia = somaFinal
                    let DataNova = (this.ano, this.mes, this.mes, this.dia)
                    console.log('Resultado 7: ' + DataNova)
                } else {
                    this.dia = soma
                    let DataNova = (this.ano, this.mes, this.mes, this.dia)
                    console.log('Resultado 8 ' + DataNova)
                }
            }
        }
    }
}





let dataAtual = new Data(new Date(2024,11,30))
dataAtual.calcula_ano_bissexto()
console.log(dataAtual)
dataAtual.somaData(40, dataAtual)
console.log(dataAtual)