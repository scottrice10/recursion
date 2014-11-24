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

  // What happens next depends on the value's type.
  if(typeof value == 'string') {
    return quote(value);
  }
  else if(typeof value == 'number') {
    // JSON numbers must be finite. Encode non-finite numbers as null.
    return isFinite(value) ? String(value) : 'null';
  }
  else if(typeof value == 'boolean') {
    return String(value);
  }
  else if(typeof value == 'null') {
    // If the value is a boolean or null, convert it to a string. Note: typeof null does not produce 'null'.
    // The case is included here in the remote chance that this gets fixed someday.
    return String(value);
  }
  else if(typeof value == 'object') {
    // If the type is 'object', we might be dealing with an object, array, or null.

    // Due to a specification blunder in ECMAScript, typeof null is 'object'.
    if(!value) {
      return 'null';
    }
