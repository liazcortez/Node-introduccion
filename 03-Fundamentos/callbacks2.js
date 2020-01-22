let empleados = [{ id: 1, nombre: 'fer' }, { id: 2, nombre: 'pancho' }, { id: 3, nombre: 'juan' }];

let salarios = [{ id: 1, salario: 1000 }, { id: 2, salario: 2000 }];

let getempleado = (id, callback) => {
    let empleadoDB = empleados.find(empleado => {
        return empleado.id === id;
    })

    if (!empleadoDB) {
        callback(`no existe el empleado con el id ${id}`);
    } else {
        callback(empleadoDB);
    }
}

let getsalario = (empleado, callback) {

}

getempleado(10, (err, result) => {
    if (err) {
        return console.log(err);
    }

    console.log(result);
});