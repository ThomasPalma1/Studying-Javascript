// throw new Error('Deu erro!')
//trycatch seria: tente executar alguma coisa (no try), se der erro, execute o catch automaticamente

function execute() {
    executeTo()
}
function executeTo() {
    throw new Error('Deu erro!')
}
function init() {

    try {
        execute()
    } catch (e) {
        console.log(`Temos um problema! ${e.message}`)
    }
}
init()
console.log('Depois do erro')