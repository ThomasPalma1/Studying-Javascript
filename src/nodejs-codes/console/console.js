console.log('Exibindo uma mensagem no console!')
//exibir um erro utilizando o console
console.error(new Error('Exibindo uma mensagem de erro, temos problemas!'))

const keyboards = ['Razer', 'Leopold', 'Varmilo', 'Ducky', 'Corsair']

console.table(keyboards)

const dados = {name: 'Thomas Palma', empresa: 'Jatto'}

console.table(dados)

console.count('processo')
console.count('processo')
console.count('processo')
console.count('processo')

console.log('Resetando o processo!')
console.countReset('processo')
console.count('processo')

console.time('contador')
for (let index = 0; index < 100; index++) {
    // console.log('-')
}
console.timeEnd('contador')

console.assert(true, 'FAÇA ALGUMA COISA!')
console.assert(false, 'Ih rapaz %s, que pena!', 'Não funcionou')

//limpa todos os dados do console
// console.clear()