import readlinesync = require('readline-sync');
import { colors } from './src/util/Color';

export function main() {
    let opcao: number;

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

                keyPress();
                break;
            case 2:
                console.log('\n\nListar todo o Produtos\n\n');

                keyPress();
                break;
            case 3:
                console.log('\n\nBuscar Produto - Por ID\n\n');

                keyPress();
                break;
            case 4:
                console.log('\n\nAtualizar Produto\n\n');

                keyPress();
                break;
            case 5:
                console.log('\n\nApagar Produto\n\n');

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
