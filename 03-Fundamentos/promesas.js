let empleados = [{ id: 1, nombre: 'fer' }, { id: 2, nombre: 'pancho' }, { id: 3, nombre: 'juan' }];

let salarios = [{ id: 1, salario: 1000 }, { id: 2, salario: 2000 }];



let getempleado = (id) => {

    return new Promise((resolve, reject) => {
        let empleadoDB = empleados.find(empleado => {
            return empleado.id === id;
        })
        console.log(empleadoDB);
        if (!empleadoDB) {
            reject(`no existe el empleado con el id ${id}`);
        } else {
            resolve(empleadoDB);
        }
    });
}

let getsalario = (empleado) => {
    return new Promise((resolve, reject) => {
        let salarioDB = salarios.find(salario => { return salario.id === empleado.id });
        console.log(salarioDB);
        if (!salarioDB) {
            reject('sin salario');

        } else {
            resolve({ 'nombre': empleado.nombre, 'id': empleado.id, 'salario': salarioDB.salario });
        }
    });
}
getempleado(3).then(empleado => {
    return getsalario(empleado);
}).then(resp => {
    console.log(resp);
}).catch(err => {
    console.log(err);
});