//requireds
const argv = require('yargs')
    .command('listar', 'imprime en consola la tabla de', {
        base: { demand: true, alias: 'b' },
        limite: { demand: true, alias: 'l', default: 10 }

    }).help().argv;
const { crearArchivo: multiplicar } = require('./multiplicar/multiplicar');
// const fs = require('fs');



let base = argv.base;


multiplicar(base).then(archivo => {
    console.log(`archivo creado ${archivo}`);
}).catch(err => {
    console.log(err);
});