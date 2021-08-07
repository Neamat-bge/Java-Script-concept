// let factorial = 1;

// for (let i = 1; i <= 5; i++) {
//     factorial = factorial * i;
// }
// console.log(factorial);


// function GetFactorial(number) {
//     let fact = 1;
//     for (let i = 1; i <= number; i++) {
//         fact = fact * i;

//     }
//     return fact;
// }
// var myFactNumber = GetFactorial(8);
// console.log('Factorial of 8 is :', myFactNumber);

// var mySecondFactNumber = GetFactorial(9);
// console.log('Factorial of 9 is :', mySecondFactNumber);


// Practice

function GetFactorial(number) {
    let factorialNum = 1;
    for (let i = 1; i <= number; i++) {
        factorialNum = factorialNum * i;
    }
    return factorialNum;
}

var myFirstFactorialNumber = GetFactorial(10);
console.log(myFirstFactorialNumber);