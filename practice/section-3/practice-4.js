'use strict';

function createUpdatedCollection(collectionA, objectB) {
  var str = collectionA.join("");
  var collectionC = new Array();
  var str1=new String("");
  for(var i = 0;i<str.length;i++){
    if("-"===str.charAt(i)){
      for(var j=1;j<parseInt(str.charAt(i+1));j++){
        str1+=str.charAt(i-1);
      }
      i=i+1;
    }
    else{
      str1+=str.charAt(i);
    }
  }
  for(var i=0;i<str1.length;i++) {
    var flag = 0;
    var arr = new Object();
    if (collectionC.length === 0) {
      arr.key = str1.charAt(i);
      arr.count = 1;
      collectionC.push(arr);
    }
    else {
      for (var j = 0; j < collectionC.length; j++) {
        if (collectionC[j].key === str1.charAt(i)) {
          collectionC[j].count++;
          flag = 1;
        }
      }
      if (flag === 0) {
        collectionC.push({key: str.charAt(i), count: 1})
      }
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
