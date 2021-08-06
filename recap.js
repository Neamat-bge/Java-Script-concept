// 1. Variables

var time = '10.15 pm';
var bookPrice = 150;
var isWhiteColor = false;


// Array 

var partners = ['sajid', 'majid', 'khalid', 'farid'];
// partners.length;
console.log(partners.length);

var majidIndex = partners.indexOf('majid');
console.log(majidIndex);

partners.pop();
partners.push('tarid')


console.log(partners);


// Conditional

if (bookPrice <= 150) {
    console.log("I will buy this book");

}
else {
    console.log('Mama, Give me some discounts.')
}


//  Loop 
var i = 0;
while (i <= 17) {
    console.log('My Boy');
    // do some work
    i++;
}
for (var i = 0; i < 12; i++) {
    console.log(i);
}


// fuction

function isMoonup() {
    if (time >= 19 && time <= 5) {
        return true;
    }
    return false;
}

var moonstatus = isMoonup(21);
console.log(moonstatus);

// let cont 

// value of avariable could chnage
let price = 27;
price = 29;
price = 31;


// value of the variable will not change(constant)

const myName = "bangladesh";

console.log(myName);
myName = 22;