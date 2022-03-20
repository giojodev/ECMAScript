const button=document.getElementById("btn");

button.addEventListener('click',async function(){
    const module=await import("./file.js");
    module.hello();
});

const bigNumber=9000901232332n;

const anotherBigNumber=BigInt(1234124123123123123123);
console.log(bigNumber);
console.log(anotherBigNumber);

// const promise1=new Promise((resolve,reject)=>reject("reject"));
// const promise2=new Promise((resolve)=>resolve("resolve 1"));
// const promise3=new Promise((resolve)=>resolve("resolve 2"));

// Promise.allSettled(promise1,promise2,promise3)
//     .then(response=>console.log(response)
// console.log(window);
console.log(globalThis);

const fooo=null ?? 'default string';
console.log(fooo);

const user={};

console.log(user?.profile?.email);

if(user?.profile?.email){
    console.log("Ttenemos email");
}else{
    console.log("fail");
}