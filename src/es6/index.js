
//Forma Antigua 
function newFunction(name,age,country){
    var name=name ||'Oscar';
    var age = age ||32;
    var country = country || 'MX';
    console.log(name,age,country);
}
//ES6
function newFunctionES6t (name='oscar',age=32,countru='MX'){
    console.log(name,age,countru);
}


newFunctionES6t();
newFunctionES6t('Giovanni','27','NI');

let hello ='Hello';
let world='world';
let epicPhrase=hello + ' ' +world;
console.log(epicPhrase);
let epicPhareES6= `${hello} ${world}`
console.log(epicPhareES6)