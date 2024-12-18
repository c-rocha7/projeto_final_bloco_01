import { Produto } from '../model/Produto';
import { ProdutoRepository } from '../repository/ProdutoRepository';

export class ProdutoController implements ProdutoRepository {
    private listaProdutos: Array<Produto> = new Array<Produto>();

    public id: number = 0;

    listarTodoOsProduto(): void {
        this.listaProdutos.forEach((produto) => produto.visualizar());
    }
    listarProdutoPeloId(id: number): void {
        this.listaProdutos.forEach((produto) => {
            if (produto.id === id) return produto.visualizar();
        });
    }
    cadastrarProduto(produto: Produto): void {
        this.listaProdutos.push(produto);
        console.log(
            `\n\nO Produto de ID ${produto.id} com nome ${produto.nome} foi criado com sucesso!\n\n`
        );
    }
    atualizarProduto(produto: Produto): void {
        const buscaProduto = this.buscarNoArray(produto.id);

        if (buscaProduto !== null) {
            this.listaProdutos[this.listaProdutos.indexOf(buscaProduto)] =
                produto;
            console.log(
                `\n\nO Produto de ID ${produto.id} com nome ${produto.nome} foi atualizado com sucesso!\n\n`
            );
        } else console.log('\n\nProduto não encontrado!\n\n');
    }
    deletarProduto(id: number): void {
        const buscaProduto = this.buscarNoArray(id);

        if (buscaProduto !== null) {
            this.listaProdutos.splice(
                this.listaProdutos.indexOf(buscaProduto),
                1
            );
            console.log(`O produto foi deletado com sucesso!`);
        } else console.log('\n\nProduto não encontrado!\n\n');
    }

    public gerarID(): number {
        return ++this.id;
    }

    public buscarNoArray(id: number): Produto | null {
        for (let produto of this.listaProdutos) {
            if (produto.id === id) return produto;
        }

        return null;
    }
}
