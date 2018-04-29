const asyncFuncCreator = generatorFunc => url => {
    const gen = generatorFunc(url);
    gen.next().value
    .then(res => gen.next(res).value)
    .then(res => { console.log(res); })
}

const fetch = require('node-fetch');
const fetchJson = asyncFuncCreator(function* (url) {
    try {
        let request = yield fetch(url);
        let text = yield request.text();
    }
    catch (error) {
        console.log(`ERROR: ${error.stack}`);
    }
})

fetchJson('http://api.icndb.com/jokes/random')
