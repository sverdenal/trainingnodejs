const synchronous = require('./synchronicity/synchronous');
const asynchronous = require('./synchronicity/asynchronous_1');
const promises = require('./synchronicity/promises')

// ----------------------------
// console.log('avant');

// asynchronous.getRandomNumberSync("azeertt", (err, res) => {
//     if(err) throw err
//     console.log(`nombre généré par getRandomNumber() : ${res}`);
// })
// console.log('aprés');
// console.log('Hey!');

// -----------------------------
// console.log('avant');

// asynchronous.addSync(4, 3, (err, res) => {
//     if(err) {
//         console.error(`erreur : ${err.message}`);
//         return
//     }
//     console.log(`result : ${res}`)
// } )
// console.log('aprés');
        
// -----------------------------
promises.getRandomNumber("qsdgqdfh")
    .then(data => console.log(`résultat : ${data}`))
    .catch(error => console.error(`erreur : ${error.message}`))
