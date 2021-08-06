
function inchTofeet(inches) {
    var feet = inches / 12;
    return feet;
}
var myInches = 132;
var feet = inchTofeet(myInches);
console.log('My Inches in Feet:', feet);

// var myInches = 132;
// var feet = inchTofeet(myInches);
// console.log('myinches in feet:', feet);

var dadiInches = 144;
var feet = inchTofeet(dadiInches);
console.log('Dadi Inche to to feet:', feet);

var naniInches = 156;
var feet = inchTofeet(naniInches);
console.log('Nani Inch to feet;', feet);


// Mile to kilometer

function mileToKilometer(miles) {
    var km = miles * 1.60934;
    return km;
}

var merathon = mileToKilometer(26.2);
console.log('Mile to Kilometer Conversion', merathon, 'km');
