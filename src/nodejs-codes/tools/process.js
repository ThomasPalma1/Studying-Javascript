console.log(`Nome do arquivo: `,__filename);
console.log(`Diretório do Arquivo: `,__dirname);
console.log(`Parâmetros de execução: `,process.argv);

switch(process.argv[2]){
    case'-a' :
    console.log ('Execute rotina principal');
    break;
    case '-i' :
        console.log('Execute instalação');
        break;
        case '-q':
            console.log ('Encerrando aplicação');
            process.exit();// interrompe imediatamente o código
            break;
        default :
        console.log('Parâmetro Inválido');

}
console.log(`Ambiente do servidor: `,process.platform);