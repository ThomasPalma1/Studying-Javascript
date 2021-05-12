const readline = require ('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('Qual é a melhor marca de Drones do mundo? ', (resposta)=>{
    console.log(`A melhor marca de Drones é: ${resposta}`)
    switch(resposta) {
        case "command" :
            console.log('Ligando o Drone...')
            break;
        case "takeoff":
            console.log('Decolando o Drone!')
            break;
        default:
            console.log ('Ligue o Drone!')
    }
    rl.close()
})