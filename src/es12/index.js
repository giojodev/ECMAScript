const string='Javascript maravilloso,Javascript prueba'

const replaced=string.replace("Javascript",'C#');
const replaced2=string.replaceAll("Javascript",'C#')
;

console.log(string);
console.log(replaced2);

class Message{
    //Para hacer un metodo privado se coloca el "#" para que puedan acceder a el de forma externa
    #show(val){
        console.log(val);
    }
    // get #add(val){
    
    // }
}

const message=new Message();
message.show('Hola');

const promisen1=new Promise((resolve,reject)=>reject("1"));
const promisen2=new Promise((resolve,reject)=>resolve("2"));
const promisen3=new Promise((resolve,reject)=>resolve("3"));

Promise.Any([promisen1,promisen2,promisen3]).then((response) => {
    console.log(response)
}).catch((err) => {
    
});

class AnyClass{
    constructor(element){
        this.ref= new WeakRef(element);
    }
}

let isTrue=true;
let isFalse=false;
console.log(isTrue &&=isFalse)
console.log(isTrue||=isFalse)
console.log(isTrue??=isFalse)