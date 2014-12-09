// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };
//

var getElementsByClassName = function (className, node) {
   var nodes = nodes || [];
   node = node || document.body;

   //if document.body has className, then add it to nodes array
   // if(document.body.className === className){
   //    nodes.push
   // }
   //iterate through nodes
   for(var i=0;i<node.children.length;i++){
    if(node.children[i].className === className){
     nodes.push(node.children[i]);
    }
    if(node.hasChildNodes()){
       var newNode = node.children[i];
       getElementsByClassName(className, newNode);


    }

   }



   return nodes;
 };
