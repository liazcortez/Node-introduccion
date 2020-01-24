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

const getListado = () => {
    cargarDB();

    return listadoPorHacer;
}
const cargarDB = () => {
    try {
        listadoPorHacer = require('../db/data');
    } catch (error) {
        listadoPorHacer = [];
    }
}
const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);
    fs.writeFile('./db/data.json', data, (err) => {
        if (err) { throw new Error('no se pudo guardar', err); } else {
            return 'guardado con exito';
        }
    });
}

const actualizar = (descripcion, completado = true) => {
    cargarDB();
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }
}

const borrar = (descripcion) => {
    cargarDB();
    let nuevolistado = listadoPorHacer.filter(tarea => { return tarea.descripcion !== descripcion });

    if (nuevolistado.length === listadoPorHacer.length) {
        return false;
    } else {
        listadoPorHacer = nuevolistado;
        guardarDB();
        return true;
    }
}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
};