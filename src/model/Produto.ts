export abstract class Produto {
    private _id: number;
    private _nome: string;
    private _categoria: number;
    private _preco: number;

    constructor(id: number, nome: string, categoria: number, preco: number) {
        this._id = id;
        this._nome = nome;
        this._categoria = categoria;
        this._preco = preco;
    }

    public get id(): number {
        return this._id;
    }

    public get nome(): string {
        return this._nome;
    }

    public get categoria(): number {
        return this._categoria;
    }

    public get preco(): number {
        return this._preco;
    }

    public set id(value: number) {
        this._id = value;
    }

    public set nome(value: string) {
        this._nome = value;
    }

    public set categoria(value: number) {
        this._categoria = value;
    }

    public set preco(value: number) {
        this._preco = value;
    }

    public visualizar() {
        let categoria: string;

        switch (this._categoria) {
            case 1:
                categoria = 'Rosto';
                break;
            case 2:
                categoria = 'Boca';
                break;
            default:
                categoria = 'Categoria Inválido!';
        }

        console.log('***********************************************');
        console.log('Dados do Produto');
        console.log('***********************************************');
        console.log(`ID do Produto: ${this._id}`);
        console.log(`Nome do Produto: ${this._nome}`);
        console.log(`Categoria do Produto: ${categoria}`);
        console.log(`Preço do Produto: ${this._preco}`);
    }
}
