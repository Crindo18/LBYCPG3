function leapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    return true;
  } else {
    return false;
  } 
}
alert(`Is 2020 a leap year? ${leapYear(2020)}`);