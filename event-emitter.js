const EventEmitter = require('events');

const mytEmitter = new EventEmitter
// listener

mytEmitter.on('birthday', () => {
console.log('happy birthday to you');
})

mytEmitter.on('birthday', (watch) => {
    console.log(`A gift ${watch} from me`)
});

mytEmitter.emit('birthday' , 'casio')

 