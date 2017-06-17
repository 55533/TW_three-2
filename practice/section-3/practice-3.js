'use strict';

function createUpdatedCollection(collectionA, objectB) {
  var str = collectionA.join("");
  var collectionC = new Array();
  collectionC.push({key:str.charAt(0),count:1})
  for(var i = 1;i<str.length;i++){
    var flag=0;
    for(var j=0;j<collectionC.length;j++){
      if(collectionC[j].key==str.charAt(i)){
        collectionC[j].count++;
        flag=1;
      }
    }
    if(flag===0){
      collectionC.push({key:str.charAt(i),count:1})
    }
  }
  let collection = collectionC;
  objectB.value.forEach(function (q) {
    collectionC.forEach(function(w) {
      if (w.key === q) {
        w.count -= Math.floor(w.count / 3);
      }
    });
  });
  return collection;
}
