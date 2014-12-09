// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;
// but you don't so you're going to write it from scratch:

// The stringify method takes an object and returns a JSON text.
var stringifyJSON = function(obj) {
  //check if is array
  if(Array.isArray(obj)){
    var stringifiedElement = [];
    for(var i = 0; i<obj.length; i++){
      stringifiedElement.push(stringifyJSON(obj[i]));
    }
    if(obj.length === 0){
      return "[" + "]";
    }else{
      return "[" + stringifiedElement + "]"
    }
  }

  //check if is object and not null
  if(obj && typeof obj === "object"){

    if(Object.keys(obj).length === 0){
      return "{}";
    }else{
      var stringifiedElement = [];
      for(var key in obj){
        if(typeof obj[key] === "function" || typeof key === "function" || typeof obj[key] === undefined ||  key === 'undefined'){
          continue;
        }
        stringifiedElement.push(stringifyJSON(key) + ":" + stringifyJSON(obj[key]));
      }

      return "{" + stringifiedElement.join(",") + "}";
    }

  }

  //check if is string
  if(typeof obj === "string"){
    return '"' + obj + '"';
  }

  return ''+obj;


};

