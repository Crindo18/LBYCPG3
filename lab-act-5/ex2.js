function leapYear(year) {
    
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return true;
    } else {
        return false;
    }
}

function initLeapYear() {
    let y = document.getElementById('yearInput').value;
    if (!y) return; 

    let isLeap = leapYear(y);
    if (isLeap) {
        alert(y + " is a Leap Year!");
    } else {
        alert(y + " is NOT a Leap Year.");
    }
}