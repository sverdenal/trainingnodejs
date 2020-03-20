const synchronous = require('./synchronicity/synchronous');
const asynchronous = require('./synchronicity/asynchronous_1');

console.log('avant');

let i = 0
const handle = setInterval(() => {
    const result = synchronous.getRandomNumberSync(10)
    console.log(`nombre généré : ${result}`);

    i++
    if(i === 10) {
        clearInterval(handle)
        console.log('terminé');
    }
}, 50);
console.log('aprés');
