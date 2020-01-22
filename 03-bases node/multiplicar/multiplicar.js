const fs = require('fs');
// 2*1=2
// 2*10=10


let crearArchivo = (base) => {
    return new Promise((resolve, reject) => {
        let data = '';
        if (!Number(base)) {
            reject('El valor introducido no es un numero');
            return
        }

        for (let index = 0; index <= 10; index++) {
            data += `${base}*${index}=${base*index}\n`;

        }

        fs.writeFile(`tablas/tabla-base-${base}.txt`, data, (err) => {
            if (err) reject(err);
            else
                resolve('The file has been saved!');
        });
    });
}


module.exports = { crearArchivo };