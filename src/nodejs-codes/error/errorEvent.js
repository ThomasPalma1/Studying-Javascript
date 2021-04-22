const { EventEmitter } = require('events')
const emitter = new EventEmitter()

const validaObjeto = (a)=>{
    if(typeof a !== 'object'){
        emitter.emit('error', new Error('Tipo informado inválido'))
    } else{
        console.log('Válido!')
    }
}

emitter.addListener('error', (err)=>{
    console.log('Evento: ' + err.message)
})

let dados = {realname:'Thomas', nickname:'Jatto'}

validaObjeto(dados)
// validaObjeto('123') 