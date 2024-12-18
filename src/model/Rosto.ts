import { Produto } from './Produto';

export class Rosto extends Produto {
    private _cor: string;

    constructor(
        id: number,
        nome: string,
        categoria: number,
        preco: number,
        cor: string
    ) {
        super(id, nome, categoria, preco);
        this._cor = cor;
    }

    public get cor(): string {
        return this._cor;
    }

    public set cor(value: string) {
        this._cor = value;
    }

    public visualizar(): void {
        super.visualizar();
        console.log(`Cor do Produto de Categoria é: ${this._cor}`);
    }
}
