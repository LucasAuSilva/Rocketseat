/* // requisitando os eventos com require e colocando em objeto js
const { EventEmitter } = require('events')

// criando novo objeto e colocando em ev
const ev = new EventEmitter()

//  ouvindo e executando a ação do evento
// ev.on('saySomething', (message) => {
//     console.log('Eu ouvi você:', message)
// })

// ouvindo apenas uma vez
ev.once('saySomething', (message) => {
    console.log('Eu ouvi você:', message)
})

// emitindo um evento
ev.emit("saySomething", "Lucas")
ev.emit("saySomething", "Camila")
ev.emit("saySomething", "Jão") */

// herda as funcoes do eventEmitter
const { inherits } = require('util')
const {EventEmitter } = require('events')

// nova funcao qualquer
function Character(name) {
    this.name = name
}

// herdando as funcoes do eventEmitter em character
inherits(Character, EventEmitter)

// criando o novo objeto com nome chapolin
const chapolin = new Character('Chapolin')

// escutando o chamado help
chapolin.on('help', () => console.log(`Eu o ${chapolin.name} colorado`))

console.log('Oh! e agora, quem poderá me defender?')

// emitindo o help
chapolin.emit('help')