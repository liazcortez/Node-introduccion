let empleados = [{ id: 1, nombre: 'fer' }, { id: 2, nombre: 'pancho' }, { id: 3, nombre: 'juan' }];

let salarios = [{ id: 1, salario: 1000 }, { id: 2, salario: 2000 }];



let getempleado = async(id) => {


    let empleadoDB = empleados.find(empleado => {
        return empleado.id === id;
    });
    if (!empleadoDB) {
        throw new Error(`no existe el empleado con el id ${id}`);
    } else {
        return empleadoDB;
    }

}

let getsalario = async(empleado) => {

    let salarioDB = salarios.find(salario => { return salario.id === empleado.id });
    if (!salarioDB) {
        throw new Error('sin salario');

    } else {
        return { 'nombre': empleado.nombre, 'id': empleado.id, 'salario': salarioDB.salario };
    }

}



let getInformacion = async(id) => {
    let empleado = await getempleado(id);
    let resp = await getsalario(empleado);
    return `${resp.nombre} tiene un salario de ${resp.salario}`

}

getInformacion(3).then((result) => {
    console.log(result);
}).catch((err) => {
    console.log(err);
});