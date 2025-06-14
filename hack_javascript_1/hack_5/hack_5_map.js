/**
 * mediante el loop map agregar los números 7,5,3,1
 * dentro del array result 
 * 
 * 
 * output => [7,5,3,1]
 */
let result = Array.from({ length: 4 }, (_, i) => 7 - 2 * i);

// Exporta el resultado
module.exports = result;