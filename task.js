var y = prompt("Enter the year");

if (y % 4 === 0) {
  if (y % 100 === 0) {
    if (y % 400 === 0) {
      alert(y + " is a leap year");
    } else {
      alert(y + " is not a leap year");
    }
  } else {
    alert(y + " is not a leap year");
  }
} else {
  alert(y + " is not a leap year");
}