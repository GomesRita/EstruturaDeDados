export class Carro{
    private placa: string
    private marca: string
    private modelo: string
    private cor: string
    protected id_proprietario: number

    constructor(placa:string, marca: string, modelo: string, cor: string, id: number){
        this.placa = placa
        this.marca = marca
        this.modelo = modelo
        this.cor = cor
        this.id_proprietario = id

    }

    set recebePlaca(placa: string){
        this.placa = placa
    }

    get retornaPlaca(): string{
        return this.placa
    }

    set recebeMarca(marca: string){
        this.marca = marca
    }

    get retornaMarca(): string{
        return this.marca
    }

    set recebeModelo(modelo: string){
        this.modelo = modelo
    }
    get retornaModelo(): string{
        return this.modelo
    }

    set recebeCor(cor: string){
        this.cor = cor
    }
    get retornaCor(): string{
        return this.cor
    }

    set recebeIdProprietario(id: number){
        this.id_proprietario = id
    }
    get retornaIdProprietario(): number{
        return this.id_proprietario
    }
}