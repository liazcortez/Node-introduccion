const argv = require('./config/yargs').argv;

let comando = argv._[0];
const porHacer = require('./por-hacer/por-hacer');
switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.d);
        console.log(tarea);
        break;
    case 'listar':
        console.log('listar');
        break;
    case 'actualizar':
        console.log('actualizar');
        break;
    default:
        console.log('comando no reconocido');
}