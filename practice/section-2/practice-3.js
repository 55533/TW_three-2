'use strict';
function countSameElements(collection) {
var str = collection.join("");
var result = new Array();
var str1=new String("");
if(str.search(/[0-9]{2}/)!=-1){
  str=str.replace(/[0-9]{2}/,"A")
}
for(var i = 0;i<str.length;i++){
  if(str.charAt(i).search('^[a-z0-9A-Z]+$')!=-1){
    var count=0
    if(str.charAt(i).search('^[0-9A-Z]')!=-1){
      if(str.charAt(i)==='A'){
        count=10
      }
      else{
        count=parseInt(str.charAt(i))
      }
      for(var j=1;j<count;j++){
        str1+=str.charAt(i-2);
      }
    }
    else{
      str1+=str.charAt(i);
    }
  }
}
for(var i=0;i<str1.length;i++) {
  var flag = 0;
  var arr = new Object();
  if (result.length === 0) {
    result.push({name: str1.charAt(i),summary: 1})
  }
  else {
    for (var j = 0; j < result.length; j++) {
      if (result[j].name === str1.charAt(i)) {
        result[j].summary++;
        flag = 1;
      }
    }
    if (flag === 0) {
      result.push({name: str1.charAt(i),summary: 1})
    }
  }
}
return result;
}
