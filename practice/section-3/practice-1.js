'use strict';

function createUpdatedCollection(collectionA, objectB) {
 let collection = collectionA;
 objectB.value.forEach(function (q) {
   collectionA.forEach(function(w){
     if(w.key === q){
       w.count --;
     }
   });
 });
  return collection;
}
