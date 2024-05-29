import { Pessoa } from "./pessoa";
import { Carro } from "./carro";

class Estacionamento{
    carros: Array<Carro> = []
    lista: Map<Pessoa[], Carro[]> = new Map();

    cadastrarRegistro(pessoa: Pessoa, carro: Carro){
        this.lista.set([pessoa], [carro])
    }
    excluirRegistro(pessoa: Pessoa){
        this.lista.delete([pessoa])
    }
    RetornaLista(){
    }
}
let adm = new Estacionamento()
let carro1 = new Carro('aaaa', 'bbbbb', 'aaaa', 'aaa')
let carro2 = new Carro('bbbbb', 'cccc', 'ddddd', 'aaaaa')
let carro3 = new Carro('CCCCC', 'FFFF', 'AAAA', 'VVVV')
let pessoa1 = new Pessoa('147852369', 'Rita','11111111')
let pessoa2 = new Pessoa('127312133', 'Maria','2222222')

adm.cadastrarRegistro(pessoa1, carro1)
adm.cadastrarRegistro(pessoa2, carro2)
adm.cadastrarRegistro(pessoa2, carro3)
adm.RetornaLista()
