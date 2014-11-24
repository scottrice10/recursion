// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;
// but you don't so you're going to write it from scratch:

// The stringify method takes an object and returns a JSON text.
var stringifyJSON = function(obj) {

  // Make a fake root object containing our value under the key of ''. Return the result of stringifying the value.
  return str('', {'': obj});
};

var str = function(key, holder) {

  // Produce a string from holder[key].
  var value = holder[key];
  var v;

