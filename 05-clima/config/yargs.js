const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        des: 'direccion de laciudad para obtener el clima',
        demand: true
    }
}).argv;


console.log(argv.direccion);