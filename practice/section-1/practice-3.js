'use strict';

function collectSameElements(collectionA, objectB) {
  var A = new Array();
  for(var i = 0;i<collectionA.length;i++) {
    for (var j = 0; j <objectB.value.length; j++) {
      if (collectionA[i] === objectB.value[j]) {
       // if (collectionA[i] === collectionB[j].value) {
        A.push(collectionA[i]);
      }
    }
  }
  return  A;
}

