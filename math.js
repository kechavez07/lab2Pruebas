// Función para calcular el factorial de un número
function factorial(n) {
    if (n < 0) return undefined;
    if (n === 0 || n === 1) return 1;
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

// Función para calcular el n-ésimo número de Fibonacci
function fibonacci(n) {
    if (n < 0) return undefined;
    if (n === 0) return 0;

    if (n === 1) return 1;
    //sdfsdfsd
    let a = 0, b = 1;
    for (let i = 2; i <= n; i++) {
        let temp = a + b;
        a = b;
        b = temp;
    }
    return b;
}

// Exportar las funciones
module.exports = {
    factorial,
    fibonacci
};
