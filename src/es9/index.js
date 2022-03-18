const obj={
    name:'oscar',
    age:32,
    country:'NI'
}
//Es posible encapsular el codigo de un objeto utilizando el siguiente metodo,
//mostrando el nombre y luego el resto del objeto, de tal forma que se obtendra lo siguiente
//oscar { age: 32, country: 'NI' }

let {name,...all}=obj;
console.log(name,all);

const obj2={
    name:'Oscar',
    age:32,
}
//Utilizando el ...objeto, se puede combinar objetos para mostrar la informacion que requiramos unir
const obj3 ={
    ...obj2,
    country:'NI'
}

console.log(obj3);

const HelloWorld=()=>{
    return new Promise((resolve,reject)=>{
        (true)
        ?setTimeout(() => {
            resolve('Hello World')
        }, 3000)
        :reject(new Error('Test Error'))
    })
}
HelloWorld().then(response=>console.log(response))
.catch(error=>console.log(error)).finally(()=>console.log('Finalizado'));

const regexData= /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match=regexData.exec('2019-04-10');
const year=match[1];
const month=match[2];
const day=match[3];

console.log(year+month+day);
