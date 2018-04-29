// ASYNC / AWAIT
const fetch = require('node-fetch');
const fetchJson = async (url) => {
  try {
    let request = await fetch(url);
    let text = await request.text();
    return text;
  }
  catch (error) {
    console.log(`ERROR: ${error.stack}`);
  }
}

fetchJson('http://api.icndb.com/jokes/random')
.then(obj => console.log(obj));
