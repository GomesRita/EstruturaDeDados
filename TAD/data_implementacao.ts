class Data{
    dia: number;
    mes: number;
    ano: number;
    mes30dias: Array<number> =  [4,6,9,11]
    mes31dias: Array<number> =  [1,3,5,7,8,10,12]

    constructor(dia: number, mes: number, ano: number){
        this.dia = dia
        this.mes = mes
        this.ano = ano
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
        let ano = this.ano
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


       let novaData = new Data(this.dia, this.mes, this.ano)
       this.recebeData_Data(novaData)
       console.log('Nova Data: ' + novaData.dia + '/' + novaData.mes + '/' + novaData.ano)
       console.log(dataAtual)

    }

    somaData(numero: number, data: Data){
        let somador = numero
        const somar  =()=>{
            if(this.mes30dias.includes(data.mes)){
                let soma = somador + data.dia
                if(soma > 30){
                    this.mes = this.mes + 1
                    if(this.mes > 12){
                        this.mes = this.mes - 12
                        this.ano = this.ano + 1
                    }
                    let somaFinal = soma - 30
                    this.dia = somaFinal
                    let DataNova = new Data(this.dia, this.mes, this.ano)
                    console.log('Resultado: ' + DataNova.dia +'/'+DataNova.mes+'/'+DataNova.ano)                } else {
                    this.dia = soma
                    let DataNova = new Data(this.dia, this.mes, this.ano)
                    console.log('Resultado: ' + DataNova.dia +'/'+DataNova.mes+'/'+DataNova.ano)                }
            } 
            else if(this.mes31dias.includes(data.mes)){
                let soma = somador + data.dia
                if(soma > 31){
                    this.mes = this.mes + 1
                    if(this.mes > 12){
                        this.mes = this.mes - 12
                        this.ano = this.ano + 1
                    }
                    let somaFinal = soma - 31
                    this.dia = somaFinal
                    let DataNova = new Data(this.dia, this.mes, this.ano)
                    console.log('Resultado: ' + DataNova.dia +'/'+DataNova.mes+'/'+DataNova.ano)                } else {
                    this.dia = soma
                    let DataNova = new Data(this.dia, this.mes, this.ano)
                    console.log('Resultado: ' + DataNova.dia +'/'+DataNova.mes+'/'+DataNova.ano)
                }
            }
        }
        if(somador > 30){
            for(var i = somador; i > 30; i = i - 30 ){
                this.mes = this.mes + 1
                somador = somador - 30
            } 
            somar()
        }
        else if(somador <= 30){
            somar()
        }
    }
}





let dataAtual = new Data(30,11,2024)
dataAtual.calcula_ano_bissexto()
dataAtual.somaData(40, dataAtual)
dataAtual.recebeData_String('24/05/2024')
