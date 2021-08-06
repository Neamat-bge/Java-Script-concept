

// const number = 5;
// const remainder = number % 2;
// console.log(remainder == 0);
// console.log(number % 2 == 0);

// const number = 145;
function isEven(number) {
    if (number % 2 == 0) {
        return true;
    }
    return false;
}
const myNumber = 1641;
const isMyNumberEven = isEven(myNumber);
console.log('Is her number is Even', isMyNumberEven);

const herNumber = 1892;
const isHerNumberEven = isEven(herNumber);
console.log('Is her number is Even:', isHerNumberEven)


//  is odd Function

function isOdd(number) {
    if (number % 2 == 1) {
        return true;
    }
    return false;
}

const hisNumber = 1447;
hisNumberIsOdd = isOdd(hisNumber);
console.log('Is number is Odd:', hisNumberIsOdd)