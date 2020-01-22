let getnombre = (nombre) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(nombre);
        }, 3000);
    });
}

let getsaludo = async() => {
    let nombre = getnombre('alex');

    return `hola ${nombre}`;
};


getsaludo().then((result) => {
    console.log(result);
}).catch((err) => {
    console.log('error', err);
});;