export class Pessoa{
    private id: number
    private nome: string
    private telefone: string

    constructor(id: number, nome: string, telefone: string){
        this.id = id
        this.nome = nome
        this.telefone = telefone
    }
    
    set insereId(id: number){
        this.id = id
    }
    set insereNome(nome: string){
        this.nome = nome
    }
    set insereTelefone(telefone: string){
        this.telefone = telefone
    }
    get retornaId(): number{
        return this.id
    }
    get retornaNome(): string{
        return this.nome
    }
    get retornaTelefone(): string{
        return this.telefone
    }
}