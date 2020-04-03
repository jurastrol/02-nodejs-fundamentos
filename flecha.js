// let sumar = (a, b) => a + b;

// let saludar = nombre => 'Hola ' + nombre


// console.log(saludar('Juan'));

let deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneracion',
    getNombre() {
        return `${this.nombre} ${this.apellido} - ${this.poder}`;
    }
}

console.log(deadpool.getNombre());