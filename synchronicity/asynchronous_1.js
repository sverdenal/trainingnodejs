exports.getRandomNumberSync = (maxValue, callback) => {
    setTimeout(() => {
        if(typeof maxValue !== "number") {
            return callback(new Error('Veuillez saisir un nombre !')
            )
        }
        const result = Math.floor(Math.random() * maxValue)
        callback(null, result)
    }, 2000);
}

exports.addSync = (firstNumber, secondNumber, callback) => {
    const result = firstNumber*secondNumber
    setTimeout(() => {
        callback(null, result)
    }, 0);
}
