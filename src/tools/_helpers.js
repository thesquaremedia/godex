/** helpers.js | assortment of helpers **/

// logging function
var Note = function(msg, data) {
  if (!debug) return;
  var pre = "GoDEX >";
  return data ? console.log(pre, msg, data) : console.log(pre, msg);
};

// rounding function
var rnd = function(num) {
  return Math.round(num * 100) / 100;
};

// percent function
var pc = function(num) {
  return Math.floor(num * 100);
};

// copy object function
// yes, it's tacky
var copy = function(obj) {
  return JSON.parse(JSON.stringify(obj));
};

// clean a string into a key
var key = function(s) {
  if (typeof s !== "string") return s;
  return s.replace(".","").replace(" ","-").replace("'","")
    .replace("♀","f").replace("♂","m").toLowerCase();
};

var isArr = function(arr) {
  return Array.isArray(arr);
};
