const handler = (event, context, callback) => {
    console.log('********* hi ************');
    callback(null, 200)
}

module.exports = {handler}

