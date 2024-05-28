import { Pessoa } from "./pessoa";
import { Carro } from "./carro";

class Estacionamento{
    lista: Map<Pessoa, Carro> = new Map();

    /*InserirPessoa(cpf: string, nome:string, telefone: string){
        let pessoa = new Pessoa(cpf, nome, telefone)
        console.log(`Pessoa: ${pessoa.nome}, ${pessoa.telefone}\n cadastrado com sucesso !!`)
    }
    InserirCarro(placa: string, marca: string, modelo: string, cor: string){
        let carro = new Carro(placa, marca, modelo, cor)
        console.log(`Veículo: ${carro.placa}, ${carro.modelo}, ${carro.marca}, ${carro.cor}\n cadastrado com sucesso !!`)
    }*/
    cadastrarRegistro(pessoa: Pessoa, carro: Carro){
        this.lista.set(pessoa, carro)
    }
    excluirRegistro(pessoa: Pessoa){
        this.lista.delete(pessoa)
    }
    RetornaLista(){
        for (let i of this.lista.entries()) {
            console.log(`Proprietário: ${i[0].nome} tel: ${i[0].telefone} | Veículo: ${i[1].marca} ${i[1].modelo} ${i[1].cor} ${i[1].placa}`);    //"Lokesh" 37 "Raj" 35 "John" 40
        }
    }
}
let adm = new Estacionamento()
let carro1 = new Carro('aaaa', 'bbbbb', 'aaaa', 'aaa')
let carro2 = new Carro('bbbbb', 'cccc', 'ddddd', 'aaaaa')
let pessoa1 = new Pessoa('147852369', 'Rita','11111111')
let pessoa2 = new Pessoa('127312133', 'Maria','2222222')

adm.cadastrarRegistro(pessoa1, carro1)
adm.cadastrarRegistro(pessoa2, carro2)
adm.RetornaLista()
