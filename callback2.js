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
]

let salarios = [{
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 2000
    }
]

let getEmpleado = (id, callback) => {
    let empleadodb = empleados.find(empleado => empleado.id === id);

    if (!empleadodb) {
        callback(`No existe un empleado con el ID ${id}`);
    } else {
        callback(null, empleadodb);
    }
}

let getSalario = (empleado, callback) => {
    let salariodb = salarios.find(salario => salario.id === empleado.id);

    if (!salariodb) {
        callback(`No se encontro un salario para el empleado ${empleado.nombre}`);
    } else {
        callback(null, {
            nombre: empleado.nombre,
            salario: salariodb.salario
        })
    }
}


getEmpleado(2, (err, empleado) => {

    if (err) {
        return console.log(err);
    }
    getSalario(empleado, (err, salario) => {

        if (err) {
            return console.log(err);
        }
        console.log(`El salario de ${salario.nombre} es de ${salario.salario}`);
    });
});