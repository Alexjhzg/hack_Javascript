/**
 * ["foo","bar","baz","qux","echo"] 
 * 
 * modificar a mayúscula el primer caracter de cada item string del array
 *  
 * 
 * output => ["Foo","Bar","Baz","Qux","Echo"]   
 */
let arr = ["foo","bar","baz","qux","echo"];
let result = [];

for (let i = 0; i < arr.length; i++) {
    let word = arr[i];
    let newWord = word.charAt(0).toUpperCase() + word.slice(1);
    result.push(newWord);
}

// Exporta el resultado
module.exports = result;