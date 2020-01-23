const fs = require('fs');

let listadoPorHacer = [];


const crear = (descripcion) => {
    cargarDB();
    let porHacer = {
        descripcion,
        completado: false
    };

    listadoPorHacer.push(porHacer);
    guardarDB();
    return porHacer;
}
const cargarDB = () => {
    listadoPorHacer = require('../db/data');
}
const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);
    fs.writeFile('./db/data.json', data, (err) => {
        if (err) { throw new Error('no se pudo guardar', err); } else {
            return 'guardado con exito';
        }
    });
}

module.exports = {
    crear
};