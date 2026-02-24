// celsius to fahrenheit
let fahrenheit= 0
const convert =(celsius)=>{
    let result = (celsius*(9/5)+32)
    fahrenheit = result
}
convert(104)
let sum = Math.floor(fahrenheit)
// let num = Math.floor(Math.random()*100)
// console.log(num)
console.log(sum,'F')

// Find the Maximum of Two Numbers

function findMaximum(num1, num2 ){
    if(num1 > num2){
        console.log(num1)
    }
    else{
        console.log(num2)
    }
}

findMaximum( 50,40)

// factorial number

const factorial = (num) =>{
    if(num < 0 ){
        console.log('please give a valid number')
    }
    else if( num ==0 || num == 1){
        return 1 
    }
    else{
        return num * factorial(num - 1 )
    }
}
let main = factorial (6)
console.log(main)

// // let count = 0 

// function counte(data){
//     for (let i = 0 ; i<=data.length-1 ; i++){
//         let demo = data[i]
        
//         if(demo === 'a' || 'e' || 'i'){
//             count ++
//         }
//         else{
//             console.log(demo)
//         }
            
//     }
// }

// counte('dataddd')
// console.log(count)
// let count =0
// const data =(strin)=>{
//     let matche = strin.match( 'e' )
//     if(matche){
//         count ++
//     }
//     return matche 
// }
// let done = data('stringe')
// console.log(done)
// console.log(count)

const callb = (done) =>{
      function sum (dome) {
        console.log(dome)
      }
      sum(done)
}

callb('sldkfj')