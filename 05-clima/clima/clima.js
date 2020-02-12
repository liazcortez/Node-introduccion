const axios = require('axios');


const getClima = async(lat, lon) => {

    const resp = await axios.get(`api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=2e1357654ccff006213312a3d8281668`);

    return resp;
}


module.exports = {
    getClima
}