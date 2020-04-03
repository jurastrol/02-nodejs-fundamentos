let empleados = [{
        id: 1,
        nombre: 'Juan'
    },
    {
        id: 2,
        nombre: 'Pepe'
    },
    {
        id: 3,
        nombre: 'Felipe'
    }
];

let salarios = [{
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 2000
    }
];

let getEmpleado = (id) => {

    return new Promise((resolve, reject) => {
        let empleadodb = empleados.find(empleado => empleado.id === id);

        if (!empleadodb) {
            reject(`No existe un empleado con el ID ${id}`);
        } else {
            resolve(empleadodb);
        }
    })
}

let getSalario = (empleado) => {

    return new Promise((resolve, reject) => {
        let salariodb = salarios.find(salario => salario.id === empleado.id);

        if (!salariodb) {
            reject(`No se encontro un salario para el empleado ${empleado.nombre}`);
        } else {
            resolve({
                nombre: empleado.nombre,
                salario: salariodb.salario
            })
        }

    })
}


getEmpleado(4).then(empleado => {
    return getSalario(empleado);

}).then(resp => console.log(`El salario de ${resp.nombre} es de ${resp.salario}`)).catch(err => console.log(err));