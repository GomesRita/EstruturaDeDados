class Data{
    dia: any;
    mes: any;
    ano: any;

    constructor(){}

    //Valida a data nas operação por meio de dados do tipo Date e do tipo String
    verificador_data(){ 
        if (this.mes === 4 || 
            this.mes === 6 || 
            this.mes === 9 || 
            this.mes === 11) {
                if (this.dia >= 1 && this.dia <= 30){
                    console.log('Data válida')
                } else {
                    console.log('Data inválida')
                }
            }
    
        if(this.mes === 1 || 
            this.mes === 3 || 
            this.mes === 5 || 
            this.mes === 7 || 
            this.mes === 8 ||
            this.mes === 11||
            this.mes === 12){
                if (this.dia >= 1 && this.dia <= 31){
                    console.log('Data válida')
                } else {
                    console.log('Data inválida')
                }
            }
    }
  
    recebeData_Data(data: Date){
        this.dia= data.getDate();
        this.mes = data.getMonth() + 1;

        this.verificador_data();
    }

    recebeData_String(data: String){
       let dataAtual = data.split('/')
       this.dia = parseInt(dataAtual[0])
       this.mes = parseInt(dataAtual[1])
       this.ano = parseInt(dataAtual[2])

      this.verificador_data();
    }

    calcula_ano_bissexto(ano: any){
        this.ano = parseInt(ano)
        if(this.ano % 4 === 0 && this.ano %100 !== 0 || (this.ano%400 === 0)){
            console.log("este é um ano bissexto")
        } else{
            console.log('este não é um ano bissexto')
        }
    }
}

let dataAtual = new Data()
dataAtual.recebeData_Data(new Date('2024-04-31'))
let data2 = new Data()
data2.recebeData_String("31/04/2023")
let data3 = new Data()
data3.calcula_ano_bissexto(2021)