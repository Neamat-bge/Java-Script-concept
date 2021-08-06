// Simple Way To identify Leap Year 

function isLeapYear(year) {
    if (year % 4 == 0) {
        return true;
    }
    else {
        return false;
    }
}
const myBirthYear = 2055;
const myBirthYearIsLeapYear = isLeapYear(myBirthYear);
console.log('Is My Birth Year Leap Year:', myBirthYearIsLeapYear)

