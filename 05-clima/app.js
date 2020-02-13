const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

const getInfo = async(direccion) => {
    let status = true;
    let dir, wheater;
    // lugar.getLugarLatLng(argv.direccion).then(response => {
    //     console.log(response);

    // }).catch(response => {
    //     console.log(response);
    // });


    // clima.getClima(-9999.000000, -9999.000000).then(console.log).catch(response => {
    //     console.log(response);
    // });

    // El clima de xxx es de xxx
    // if(status){
    //     console.log(`El clima de ${dir} es de ${wheater}`);
    // }else{
    //     console.log('No se pudo determinar el clima');
    // }

    // No se pudo determinar el clima

    try {
        const coords = await lugar.getLugarLatLng(direccion);
        const temp = await clima.getClima(coords.lat, coords.lng);
        return `El clima de ${coords.dir} es de ${temp}.`;
    } catch (e) {
        return e;
    }

}



getInfo(argv.direccion).then(console.log).catch(console.log);






//