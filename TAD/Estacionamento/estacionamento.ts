import { Pessoa } from "./ModeloPessoa";
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
        console.log(this.veiculo)
    }
}

let estacionamento = new  Estacionamento()





