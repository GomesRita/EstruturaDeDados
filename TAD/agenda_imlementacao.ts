import { Pessoa } from "./pessoa";
class Agenda{
    listaAgenda: Array<Pessoa> = []
    InserirContato(nome: string, endereco: string, telefone: string){
        var novoContato = new Pessoa(nome, endereco, telefone)
        this.listaAgenda.push(novoContato);
    }
    ConsultarContatos(Nome: string){
        console.log(`Resultado da Busca:\n`)
        let busca = false
        for(var i = 0; i < this.listaAgenda.length; i++ ){
            if(this.listaAgenda[i].nome === Nome){
                console.log(`Nome: ${this.listaAgenda[i].nome}  Telefone: ${this.listaAgenda[i].telefone}  Endereço: ${this.listaAgenda[i].endereco}`)
                busca = true
            }
        } 
        if(busca !== true){
            console.log("Registro não encontrado")
        }
      
    }
    ExibirContatos(){
        this.listaAgenda.forEach(function (value: Pessoa){
            console.log(`Nome: ${value.nome}   Telefone: ${value.telefone}    Endereço: ${value.endereco}`)
        });
    }
    ExcluirContato(){

    }
}

let agenda = new Agenda()
agenda.InserirContato('Rita','AAA','9991111222');
agenda.InserirContato('Maria','A2A','444555888');
agenda.ExibirContatos();
agenda.ConsultarContatos('Maria')