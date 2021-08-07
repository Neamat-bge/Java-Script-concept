// function getFactorial(number) {
//     let factorial = 1;
//     let i = 1;
//     while (i <= number) {

//         factorial = factorial * i;
//         i++;
//     }
//     return factorial;
// }
// const myFactNumber = getFactorial(6);
// console.log('My Factorial Number is:', myFactNumber);



// Decrementing While Loop for factorial

function getFactorial(number) {
    let factorial = 1;
    let i = number;
    while (i >= 1) {
        factorial = factorial * 1;
        i--;
    }
    return factorial;
}
const myThirdNumber = getFactorial(9);
console.log('My decrementing Fact Number', myThirdNumber);

