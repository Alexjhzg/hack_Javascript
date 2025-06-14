/**
 * ["foo","bar","baz","qux","echo"] 
 * 
 * 1) anexar al array result los items [bar,baz,qux]
 * 2) los 2 primeros items reescribir el caracter "a" por @
 * modificar el último item "quz" a mayúscula
 *  
 * 
 * output => ["b@r","b@z","QUX"]   
 */
let arr = ["foo", "bar", "baz", "qux", "echo"];
let result = [];

// 1) Anexar al array result los items ["bar", "baz", "qux"]
result = arr.slice(1, 4);

// 2) Reemplazar 'a' por '@' en los 2 primeros items
for (let i = 0; i < 2; i++) {
    result[i] = result[i].replace(/a/g, '@');
}

// 3) Convertir el último item a mayúscula
result[2] = result[2].toUpperCase();

// Exporta el resultado
module.exports = result;