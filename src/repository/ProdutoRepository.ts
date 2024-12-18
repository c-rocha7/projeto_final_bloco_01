import { Produto } from "../model/Produto";

export interface ProdutoRepository {
	listarTodoOsProduto(): void;
	listarProdutoPeloId(id: number): void;
	cadastrarProduto(produto: Produto): void;
	atualizarProduto(produto: Produto): void;
	deletarProduto(produto: Produto): void;
}
