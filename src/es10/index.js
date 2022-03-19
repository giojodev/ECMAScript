let array=[1,2,3, [1,2,3,[1,2,3]]];
//La funcion flat, "aplana" un array que tiene varios niveles
//es posible pasar como parametro la cantidad de niveles que queremos revisar
console.log(array.flat(2));

//lo mismo que flat con el beneficio de que primero manipular la data para luego poder aplanar.
let array2=[1,2,3,4,5];
console.log(array2.flatMap(value=>[value, value*2]));

let hello='     hello world';

console.log(hello.trimStart());

let hello2='hello world      ';
console.log(hello2.trimEnd());

/*
ahora puedes utilizarlo sin necesidad de especificaro 
como catch(error) sino directamente usarlo en el scope 
del catch.
*/
try {
    
} catch {
    
}

let entries= [["name","oscar"],["age",32]];
/*
lo inverso a Object.entries(), es decir podemos convertir un 
objeto en una matriz clave/valor con Object.entries(), y hace 
lo inverso es decir de una matriz clave/valor a un objeto 
con Object.fromEntries().
*/
console.log(Object.fromEntries(entries));

let mySymbl='My Symbol';
// permite regresar el descripcion opcional del Symbol
let sumbol=Symbol(mySymbl);
console.log(sumbol.description);