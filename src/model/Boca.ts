import { Produto } from './Produto';

export class Boca extends Produto {
    private _sabor: string;

    constructor(
        id: number,
        nome: string,
        categoria: number,
        preco: number,
        sabor: string
    ) {
        super(id, nome, categoria, preco);
        this._sabor = sabor;
    }

	public get sabor(): string {
		return this._sabor;
	}

	public set sabor(value: string) {
		this._sabor = value;
	}

	public visualizar(): void {
        super.visualizar();
        console.log(`O sabor do Produto de Categoria é: ${this._sabor}`);
    }
}
