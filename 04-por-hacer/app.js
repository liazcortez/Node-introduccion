const argv = require('./config/yargs').argv;
const colors = require('colors');
let comando = argv._[0];
const porHacer = require('./por-hacer/por-hacer');
switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.d);
        console.log(tarea);
        break;
    case 'listar':
        let listado = porHacer.getListado();
        console.log(listado);
        for (let tarea of listado) {
            console.log('========Por Hacer========'.green);
            console.log(tarea.descripcion);
            console.log('Estado: ', tarea.completado);
            console.log('========================='.green);
        }
        break;
    case 'actualizar':

        let actualizar = porHacer.actualizar(argv.d);
        console.log(actualizar);
        break;
    case 'borrar':
        let borrar = porHacer.borrar(argv.d);
        console.log(borrar);
        break;
    default:
        console.log('comando no reconocido');
}