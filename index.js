var length = require('length.js');
console.log(length(140, 'cm').to('m'));

var moment = require('moment');
var a = moment().format('LLLL');
console.log(a);
console.log("Another test, will it pop up in browser without webpack?");
console.log("appears on browser after writting ./node_modules/.bin/webpack ./index.js --mode=development");

console.log("Index js heloooo");

var i = 0;
while (i < 10) {
  console.log(i);
  i ++;
}
