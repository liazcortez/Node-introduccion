const opts = {
    base: { demand: true, alias: 'b' },
    limite: { demand: true, alias: 'l', default: 10 }

};
const argv = require('yargs')
    .command('listar', 'imprime en consola la tabla de', opts)
    .command('crear', 'imprime en consola la tabla de', opts).help().argv;

module.exports = {
    argv
};