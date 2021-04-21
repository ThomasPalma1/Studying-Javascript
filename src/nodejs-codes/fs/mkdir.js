const fs = require ('fs')


fs.mkdir('projeto',{recursive: true}, (err)=>{ //caso ative o recursive: true, todos os diretórios que ele não tiver, ele vai criar automaticamente
    if(err) throw err
    console.log('Diretório criado com sucesso!')
});
