let getusuarioByid = (id, callback) => {

    let usuario = {
        nombre: 'fernando',
        id
    }
    console.log(id);
    if (id === 20) {
        callback('usuario no existe')
    } else {
        callback(null, usuario);
    }
}



getusuarioByid(20, (err, usuario) => {
    if (err != null) {
        console.log(err);
        return
    }
    console.log('Usurio de la base de datos : ' + usuario.id);
});