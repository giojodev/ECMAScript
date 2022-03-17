
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

let lorem='asdweqdscdfewdcwfv wqesdacxvdewdf qscddsc \n'
+'asdfweqds qdsffre3wdsfef'
console.log(lorem)

//ES6
let loremES6 =`Esto es una prueba
bastante rigurosa
para probar es6`

console.log(loremES6)

let person={
    'name':'giovani',
    'age':27,
    'country':'NI'
}
console.log(person.name,person.age);

//ES6
let {name,age,country}=person;
console.log(name,age,country);

let team1=['oscar','julian','ricardo'];
let team2=['valeria','yesica','camila'];

let education =['david',...team1,...team2];

console.log(education)

{
    var global='global var';
}
{
    let globallet='global let'
    console.log(globallet);
}

console.log(global);

class   calculator{
    constructor(){
        this.valueA = 0;
        this.valueB = 0
    }

    sumar(ValueA,ValueB){
        this.valueA=ValueA;
        this.valueB=ValueB;

        return this.valueA+this.valueB;

    }
    restar(ValueA,ValueB){
        this.valueA=ValueA;
        this.valueB=ValueB;

        return this.valueA-this.valueB;

    }
    multiplicar(ValueA,ValueB){
        this.valueA=ValueA;
        this.valueB=ValueB;

        return this.valueA*this.valueB;

    }
    dividir(ValueA,ValueB){
        this.valueA=ValueA;
        this.valueB=ValueB;

        return this.valueA/this.valueB;

    }
}

const calc=new calculator();
console.log(calc.sumar(10,20));

//ES6 Import - Export

import {hello} from "./module";

hello();

function* helloworld(){
    if(true){
        yield 'Hello, ';
    }
    if(true){
        yield 'World';
    }
};

const generatorHello=helloworld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);