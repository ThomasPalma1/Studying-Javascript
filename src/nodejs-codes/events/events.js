const EventEmitter = require ('events')

class Evento extends EventEmitter {}

const meuEvento = new Evento()

meuEvento.on('seguranca', (x,y)=>{ //no on a gente cria o evento
    console.log(`Executando o evento 'seguranca': ${x} ${y}`)
})

meuEvento.emit('seguranca', 'userAdmin', 'Alterou Salário')

