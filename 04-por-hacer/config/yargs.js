 const argv = require('yargs')
     .command('crear', 'Crea un elemento por hacer', { descripcion: { alias: 'd', demand: true } })
     .command('actualizar', 'Actualiza el estado de una tarea', { descripcion: { alias: 'd', demand: true }, completado: { alias: 'c', default: true } }).help().argv;

 module.exports = {
     argv
 };