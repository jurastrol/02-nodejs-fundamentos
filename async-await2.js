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

let getEmpleado = async(id) => {

    let empleadodb = empleados.find(empleado => empleado.id === id);

    if (!empleadodb) {
        throw new Error(`No existe un empleado con el ID ${id}`);
    } else {
        return empleadodb;
    }
}

let getSalario = async(empleado) => {

    let salariodb = salarios.find(salario => salario.id === empleado.id);

    if (!salariodb) {
        throw new Error(`No se encontro un salario para el empleado ${empleado.nombre}`);
    } else {
        return {
            nombre: empleado.nombre,
            salario: salariodb.salario
        };
    }
}

let getInformacion = async(id) => {

    let empleado = await getEmpleado(id);
    let resp = await getSalario(empleado);

    return `${resp.nombre} tiene un salario de ${resp.salario}$`
}

getInformacion(1).then(resp => console.log(resp)).catch(error => console.log(error));