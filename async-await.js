/**
 * Async Await
 */

// let getNombre = async() => {
//     throw new Error('No existe un nombre para ese usuario')
//     return 'Fernando';
// };


let getNombre = async() => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Juan');
        }, 3000);
    })
};

let saludo = async() => {

    let nombre = await getNombre();

    return `Hola ${nombre}`;
}


saludo().then(saludo => console.log(saludo)).catch(e => console.log('Error de ASYNC', e));