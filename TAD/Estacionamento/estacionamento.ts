import { Pessoa } from './ModeloPessoa';
import { Carro } from "./ModeloCarro";

export class Estacionamento {
    lista: Array<Pessoa> = []
    veiculo: Array<Carro> = []
    lista_proprietarios: Array<number> = []
    lista_veiculos: Array<string> = []


    inserirPessoa(id: number,nome: string, telefone: string){
            let newProprietario = new Pessoa(id, nome, telefone)
            this.lista_proprietarios.push(id)
            this.lista.push(newProprietario)
    }

    inserirVeiculo(placa: string, marca: string, modelo: string, cor: string, idProprietario: number){
        if(this.lista_veiculos.includes(placa)){
            console.log('Veículo já cadastrado')
        } else {
            if(this.lista_proprietarios.includes(idProprietario)){
                let newVeiculo = new Carro(placa, marca, modelo, cor, idProprietario)
                this.lista_veiculos.push(placa)
                this.veiculo.push(newVeiculo)
            } else {
                console.log(`Este id ${idProprietario} não está vinculado a nenhum proprietario`)
            }
        }
    }

    retornarProprietario(){
        console.log(this.lista)
    }
    retornaVeiculos(){
        console.log(this.veiculo)
    }

    excluirProprietario(id: number){
        for(var i = 0; i < this.lista_proprietarios.length ; i++ ){
                if(this.lista_proprietarios.includes(id) && this.lista[i].retornaId === id){
                    this.lista_proprietarios.splice(i, 1)
                    this.lista.splice(i,1)
                    console.log('Proprietário exclído com sucesso')

                }
                break;
            }
        } 

}



let estacionamento = new  Estacionamento()
estacionamento.inserirPessoa(1, 'Maria', '111111111')
estacionamento.inserirPessoa(2, 'Rita', '222222222')
estacionamento.inserirVeiculo('aaa','aaa', 'aaa','aaaa', 1)
estacionamento.inserirVeiculo('bbbb','bbb', 'bbbb','bbbb', 1)
estacionamento.retornarProprietario()
estacionamento.retornaVeiculos()
estacionamento.excluirProprietario(1)
estacionamento.retornarProprietario()
estacionamento.retornaVeiculos()



