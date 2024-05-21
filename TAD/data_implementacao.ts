class Data{
    dia: any;
    mes: any;
    ano: any;

    constructor(){}
  
    recebeData_Data(data: Date){
        this.dia= data.getDate();
        this.mes = data.getMonth() + 1;


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

    recebeData_String(){}
}

let dataAtual = new Data()
dataAtual.recebeData_Data(new Date('2024-04-31'))