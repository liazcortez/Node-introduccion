const axios = require('axios');
const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;


const encodedUrl = encodeURI(argv.direccion);
const instance = axios.create({
    baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUrl}`,
    timeout: 1000,
    headers: { 'x-rapidapi-key': 'eee6d08bd8mshb44e170a162f31ap1b9d1djsnf4ed033957a8' }
});
instance.get().then(resp => {
    console.log(resp.data.Results[0]);
}).catch(err => {
    console.log('ERROR', err);
});