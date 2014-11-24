// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  return getElement(className, document.body);
};

var getElement = function(className, element) {
  var returnArr = [];
  if(element.classList && element.classList.contains(className)) {
    returnArr[returnArr.length] = element;
  }

  var children = element.childNodes || [];
  for(var i = 0; i<children.length; i++) {
    returnArr = returnArr.concat(
      getElement(className, children[i])
    );
  }

  return (returnArr);
}
