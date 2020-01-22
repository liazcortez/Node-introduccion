//requireds
const { crearArchivo: multiplicar } = require('./multiplicar/multiplicar');
// const fs = require('fs');
let base = 'd';




multiplicar(base).then(archivo => {
    console.log(`archivo creado ${archivo}`);
}).catch(err => {
    console.log(err);
});