var length = require('length.js');
console.log(length(140, 'cm').to('m'));

var moment = require('moment');
var a = moment().format('LLLL');
console.log(a);
console.log("Another test, will it pop up in browser without webpack?");
console.log("appears on browser after writting ./node_modules/.bin/webpack ./index.js --mode=development");

console.log("Index js heloooo");

console.log("fibonacci sequence test with ES2015");
var fibonacci = {
  [Symbol.iterator]: function*() {
    var pre = 0, cur = 1;
    for (;;) {
      var temp = pre;
      pre = cur;
      cur += temp;
      yield cur;
    }
  }
};

for (var n of fibonacci) {
  // truncate the sequence at 1000
  if (n > 1000)
    break;
  console.log(n);
}
console.log("test autosave");
console.log("fibo");

var headerTag = document.querySelector('H1');
var lists = document.querySelector('ul');
var listsLi = document.querySelector('li');

headerTag.innerHTML = "New header";
lists.style.fontSize = "25px";
lists.style.color = "green";

console.log(listsLi);