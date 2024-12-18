import readlinesync = require('readline-sync');
import { colors } from './src/util/Color';
import { ProdutoController } from './src/controller/ProdutoController';
import { Rosto } from './src/model/Rosto';
import { Boca } from './src/model/Boca';

export function main() {
    let opcao, categoria, preco, id: number;
    let nome, cor, sabor: string;

    const listaCategorias: Array<string> = ['Rosto', 'Boca'];

    const produtos: ProdutoController = new ProdutoController();

    let cc1 = new Boca(produtos.gerarID(), 'Boca', 2, 200, 'Sabor');
    let cc2 = new Rosto(produtos.gerarID(), 'Rosto', 1, 100, 'Cor');

    produtos.cadastrarProduto(cc1);
    produtos.cadastrarProduto(cc2);

    while (true) {
        console.log(colors.bg.black, colors.fg.yellow);
        console.log('*****************************************************');
        console.log('                                                     ');
        console.log('                TrixiQ                               ');
        console.log('                                                     ');
        console.log('*****************************************************');
        console.log('                                                     ');
        console.log('            1 - Criar Produto                        ');
        console.log('            2 - Listar todos os Produtos             ');
        console.log('            3 - Buscar Produto por ID                ');
        console.log('            4 - Atualizar Produto                    ');
        console.log('            5 - Apagar Produto                       ');
        console.log('            0 - Sair                                 ');
        console.log('                                                     ');
        console.log('*****************************************************');
        console.log(colors.reset);

        console.log('Entre com a opção desejada: ');
        opcao = readlinesync.questionInt();

        if (opcao === 0) {
            console.log('\nTrixiQ - Produto de Beleza Diferenciados');
            about();
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log('\n\nCriação de Produto\n\n');

                console.log('Digite o nome do Produto: ');
                nome = readlinesync.question();

                console.log('Escolha a categoria de Produto: ');
                categoria =
                    readlinesync.keyInSelect(listaCategorias, '', {
                        cancel: false,
                    }) + 1;

                console.log('Digite o preço do Produto: ');
                preco = readlinesync.questionFloat();

                switch (categoria) {
                    case 1:
                        console.log('Digite a cor do Produto: ');
                        cor = readlinesync.question();

                        produtos.cadastrarProduto(
                            new Rosto(
                                produtos.gerarID(),
                                nome,
                                categoria,
                                preco,
                                cor
                            )
                        );

                        break;
                    case 2:
                        console.log('Digite o sabor do Produto: ');
                        sabor = readlinesync.question();

                        produtos.cadastrarProduto(
                            new Boca(
                                produtos.gerarID(),
                                nome,
                                categoria,
                                preco,
                                sabor
                            )
                        );

                        break;
                }

                keyPress();
                break;
            case 2:
                console.log('\n\nListar todo o Produtos\n\n');

                produtos.listarTodoOsProduto();

                keyPress();
                break;
            case 3:
                console.log('\n\nBuscar Produto - Por ID\n\n');

                console.log('Digite o ID do produto: ');
                id = readlinesync.questionInt();

                produtos.listarProdutoPeloId(id);

                keyPress();
                break;
            case 4:
                console.log('\n\nAtualizar Produto\n\n');

                console.log('Digite o ID do produto: ');
                id = readlinesync.questionInt();

                let produto = produtos.buscarNoArray(id);

                if (produto !== null) {
                    console.log('\n\nCriação de Produto\n\n');

                    console.log('Digite o nome do Produto: ');
                    nome = readlinesync.question();

                    console.log('Digite o preço do Produto: ');
                    preco = readlinesync.questionFloat();

                    switch (produto.categoria) {
                        case 1:
                            console.log('Digite a cor do Produto: ');
                            cor = readlinesync.question();

                            produtos.atualizarProduto(
                                new Rosto(
                                    produto.id,
                                    nome,
                                    produto.categoria,
                                    preco,
                                    cor
                                )
                            );

                            break;
                        case 2:
                            console.log('Digite o sabor do Produto: ');
                            sabor = readlinesync.question();

                            produtos.atualizarProduto(
                                new Boca(
                                    produto.id,
                                    nome,
                                    produto.categoria,
                                    preco,
                                    sabor
                                )
                            );

                            break;
                    }
                }

                keyPress();
                break;
            case 5:
                console.log('\n\nApagar Produto\n\n');

                console.log('Digite o ID do produto: ');
                id = readlinesync.questionInt();

                produtos.deletarProduto(id);

                keyPress();
                break;
            default:
                console.log('\n\nOpção Inválida!\n\n');
                keyPress();
                break;
        }
    }
}

export function about() {
    console.log(colors.bg.black, colors.fg.green);
    console.log('*'.repeat(50));
    console.log('Projeto Desenvolvido por: ');
    console.log('Cauã R. Pereira - 7aauac@gmail.com');
    console.log('https://github.com/c-rocha7');
    console.log('*'.repeat(50));
    console.log(colors.reset);
}

function keyPress(): void {
    console.log('\nPressione enter para continuar...');
    readlinesync.prompt();
}

main();
