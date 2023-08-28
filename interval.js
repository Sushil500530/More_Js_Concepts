console.log(1)
console.log(2)
let num = 0 ;
// const intervalId = setInterval(() => {
//     console.log(++num)
//     if(num === 10){
//         clearInterval(intervalId)
//     }
// },1000)
console.log(4)
console.log(5)
console.log(6)
console.log(7)
console.log(8)

console.log('synchronous_1');
setTimeout(function(){
    console.log('asynchronous_1')
}, 5000)

console.log('synchronous_2');
setTimeout(function(){
    console.log('asynchronous_2')
}, 10000)

console.log('synchronous_3');