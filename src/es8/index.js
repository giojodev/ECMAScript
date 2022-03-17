const data={
    frontend:'Oscar',
    backend:'Isabel',
    design:'Ana',
}
//Con object.entries, es posible pasar un objeto a una variable
//Donde mostrara la variable y el valor asignado
const entries= Object.entries(data);
console.log(entries);
console.log(entries.length);

const data2={
    frontend:'Oscar',
    backend:'Isabel',
    design:'Ana',
}
//Utilizando object.values, se pasara la informacion del valor de las variables unicamente.
const values=Object.values(data2);
console.log(values);
console.log(values.length);

//Es posible agregar al inicio o final de una variable string caracteres usando los 
//metodos, padStart y padEnd, donde se pasaran la cantidad maxima de caracteres, y luego los string extras
const string='hello';
console.log(string.padStart(7,'hi'));
console.log(string.padEnd(7,'hi'));
console.log('food'.padEnd(12,' ----- ' ));

