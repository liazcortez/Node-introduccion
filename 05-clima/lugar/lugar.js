const axios = require('axios');

const getLugarLatLng = async(direccion) => {
    const encodedUrl = encodeURI(direccion);
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUrl}`,
        timeout: 1000,
        headers: { 'x-rapidapi-key': 'eee6d08bd8mshb44e170a162f31ap1b9d1djsnf4ed033957a8' }
    });

    const resp = await instance.get();

    if (resp.data.Results.length === 0) {
        throw new Error('No hay resultados');
    }

    const data = resp.data.Results[0];
    const dir = data.name
    const lat = data.lat;
    const lng = data.lon;
    return {
        dir,
        lat,
        lng
    }
}

module.exports = {

    getLugarLatLng
};