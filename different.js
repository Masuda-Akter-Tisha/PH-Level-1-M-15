// for (let i = 1; i <= 30; i ++){
//     if(i % 2 === 1){
//         console.log(i);
//     }
// }
//even
// i % 2 === 0
// i % 2 !==1

//odd
// i % 2 ===1
// i % 2 !==0

// for (a = 1; a <= 30; a ++){
//     if(a % 5 === 0 || a % 3 === 0){
//         console.log(a);
//     }
// }

// for (a = 1; a <= 30; a ++){
//     if(a % 5 === 0 && a % 3 === 0){
//         console.log(a);
//     }
// }

// let sum = 0;
// for (let n = 1; n <= 30; n++){
//     console.log(n);
//     sum = n + sum;
//     // console.log('sum is:', sum);
// }
// console.log('sum is:', sum);

let sum = 0;
for (let i = 1; i <= 30; i ++){
    if(i % 3 === 0){
        console.log(i);
         sum = i + sum;
    }
}
  console.log('sum =', sum);