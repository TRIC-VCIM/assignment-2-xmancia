var firstName = prompt('What is your first name?');

var birthMonth = prompt('What month were you born (full month name)?');

var zodiacSign;


if ( birthMonth.toUpperCase() === 'JANUARY' ) {
  zodiacSign = "Capricorn";

} else if ( birthMonth.toUpperCase() === 'FEBRUARY'){
  zodiacSign = "Aquarius";

} else if ( birthMonth.toUpperCase() === 'MARCH'){
  zodiacSign = "Pisces";

} else if ( birthMonth.toUpperCase() === 'APRIL'){
  zodiacSign = "Aries";

} else if ( birthMonth.toUpperCase() === 'MAY'){
  zodiacSign = "Taurus";

} else if ( birthMonth.toUpperCase() === 'JUNE'){
  zodiacSign = "Gemini";

} else if ( birthMonth.toUpperCase() === 'JULY'){
  zodiacSign = "Cancer";

} else if ( birthMonth.toUpperCase() === 'AUGUST'){
  zodiacSign = "Leo";

} else if ( birthMonth.toUpperCase() === 'SEPTEMBER'){
  zodiacSign = "Virgo";

} else if ( birthMonth.toUpperCase() === 'OCTOBER'){
  zodiacSign = "Libra";

} else if ( birthMonth.toUpperCase() === 'NOVERMBER'){
  zodiacSign = "Scorpio";

} else if ( birthMonth.toUpperCase() === 'DECEMBER'){
  zodiacSign = "Sagittarius";

} else {
  zodiacSign = "unknown";
}


  document.querySelector(".result").innerHTML = `${firstName}, your birth sign for the month of ${birthMonth} is probably ${zodiacSign}.`
