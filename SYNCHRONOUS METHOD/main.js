//synchronous method
// let a = 1;
// let b = 2;
// let c = 3;
// console.log(a)
// console.log(b)
// console.log(c)
// ASYNCHRONOUS METHOD
console.log(1);
console.log(2);
setTimeout(function () {
    console.log(3);
}, 3000); //3000 = 3sec
console.log(4);
// //................
// setTimeout(()=>{                              //method2
//     console.log("3")
// },3000);       //3000 = 3sec
