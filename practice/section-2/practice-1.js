'use strict';
function countSameElements(collection) {
var str = collection.join("");
var result = new Array();
  result.push({key:str.charAt(0),count:1})
for(var i = 1;i<str.length;i++){
  var flag=0
  for(var j=0;j<result.length;j++){
    if(result[j].key==str.charAt(i)){
      result[j].count++
      flag=1
    }
  }
  if(flag===0){
    result.push({key:str.charAt(i),count:1})
  }
}
return result
}
