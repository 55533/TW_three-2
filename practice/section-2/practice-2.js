'use strict';

function countSameElements(collection) {
  var str = collection.join("");
  var result = new Array();
  var str1=new String("");
  //result.push({key:str.charAt(0),count:1})
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
    if (result.length === 0) {
      arr.key = str1.charAt(i);
      arr.count = 1;
      result.push(arr);
    }
    else {
      for (var j = 0; j < result.length; j++) {
        if (result[j].key === str1.charAt(i)) {
          result[j].count++;
          flag = 1;
        }
      }
      if (flag === 0) {
        result.push({key: str.charAt(i), count: 1})
      }
    }
  }
  return result;
}
