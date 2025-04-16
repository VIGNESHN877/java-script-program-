// Date and Time


let date = new Date('2004-12-22');




let hours = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();
let ampm = hours >= 12 ? 'PM' : 'AM';
hours = hours % 12;
hours = hours ? hours : 12; // display '12' instead of '0'
minutes = minutes < 10 ? '0' + minutes : minutes;
seconds = seconds < 10 ? '0' + seconds : seconds;
// Display the date and time in the specified format
console.log(`${hours}:${minutes}:${seconds} ${ampm}`);
// Output: 12:30:45 PM  