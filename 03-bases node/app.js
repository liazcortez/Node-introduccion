//requireds
const argv = require('./config/yargs').argv;
const { crearArchivo: multiplicar, listarTabla: listar } = require('./multiplicar/multiplicar');
// const fs = require('fs');
let comando = argv._[0];
let base = argv.base;
let limite = argv.limite;
switch (comando) {
    case 'listar':

        listar(base, limite);
        break;

    case 'crear':

        multiplicar(base).then(archivo => {
            console.log(`archivo creado ${archivo}`);
        }).catch(err => {
            console.log(err);
        });

        break;


    default:
        console.log('mensaje no reconocido');

}