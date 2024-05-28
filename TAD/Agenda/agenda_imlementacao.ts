import { Pessoa } from "./pessoa";
class Agenda{
    listaAgenda: Array<Pessoa> = []
    InserirContato(nome: string, endereco: string, telefone: string){
        let verificador = false
        for(var i = 0; i < this.listaAgenda.length; i++ ){
            if(this.listaAgenda[i].telefone === telefone){
                console.log("Este contato já existe")
                verificador = true
                break;
            }
        } 
        if(!verificador){
            var novoContato = new Pessoa(nome, endereco, telefone)
            this.listaAgenda.push(novoContato);
            console.log('Contato cadastrado com sucesso!!')
        }
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
    ExcluirContato(Telefone: string){
        for(var i = 0; i < this.listaAgenda.length; i++ ){
            if(this.listaAgenda[i].telefone === Telefone){
               this.listaAgenda.splice(i, 1)
               console.log('Contato Excluído com sucesso')
               break
            }
        } 
    }
}

let agenda = new Agenda()
agenda.InserirContato('Rita','AAA','9991111222');
agenda.InserirContato('Maria','A2A','444555888');
agenda.ExibirContatos();
agenda.ExcluirContato('444555888')
agenda.ExibirContatos();