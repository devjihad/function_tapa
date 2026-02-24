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