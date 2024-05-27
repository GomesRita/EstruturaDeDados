import { Pessoa } from "./pessoa";
class Agenda{
    listaAgenda: Array<Pessoa> = []
    InserirContato(nome: string, endereco: string, telefone: string){
        var novoContato = new Pessoa(nome, endereco, telefone)
        this.listaAgenda.push(novoContato);
    }
    ConsultarContatos(){

        
    }
    ExibirContatos(){
        this.listaAgenda.forEach(function (value: Pessoa){
            console.log(`Nome: ${value.nome}   Telefone: ${value.telefone}    Endereço: ${value.endereco}`)
        });
    }
    ExcluirContato(){}
}

let agenda = new Agenda()
agenda.InserirContato('Rita','AAA','9991111222');
agenda.InserirContato('Maria','A2A','444555888');
agenda.ExibirContatos();