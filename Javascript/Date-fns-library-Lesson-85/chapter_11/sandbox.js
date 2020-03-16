const now = new Date();
// Create new date object (will be the date at the moment the program is ran)

console.log(dateFns.isToday(now));
// Returns boolean of True or False

// formatting options
// https://date-fns.org/v2.9.0/docs/format
//[date we want to format, format method]
console.log(dateFns.format(now, "YYYY"));
// 4 char year
console.log(dateFns.format(now, "MMMM"));
// Month name
console.log(dateFns.format(now, "dddd"));
// Day name
console.log(dateFns.format(now, "Do"));
// Day with 'th' endings EX: 1st, 2nd, etc
console.log(dateFns.format(now, "dddd, Do MMMM, YYYY"));

// comparing dates
const before = new Date("February 1 2019 12:00:00");

console.log(dateFns.distanceInWords(now, before, { addSuffix: true }));
// Function to compare dates [get the difference in time] EX: about 2 months
// addSuffix: [adds 'ago' to the end]
