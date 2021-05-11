import {EventEmitter} from 'events'


class Evento extends EventEmitter {}

const meuEvento = new Evento()

//criando um assinante
meuEvento.on('seguranca', (x,y)=>{ //no on a gente cria o evento
    console.log(`Executando o evento 'seguranca': ${x} ${y}`)
})
//criando um emissor
meuEvento.emit('seguranca', 'userAdmin', 'Alterou Salário')


meuEvento.on('encerrar', (dados)=>{
    console.log ('Assinante:'+ dados)
})

meuEvento.emit('encerrar', 'Encerrando a execução da importação dos dados!')